import React from 'react';
import { Link, Route } from 'react-router-dom';
import SpotMap from './spot_map'
import SpotsIndexContainer from "./spots_container";
import MarkerManager from '../../util/marker_manager'



class MoonMap extends React.Component {

    
    componentDidMount(){
        const MOON_BOUNDS = {
            north: 80,
            south: -80.35,
            west: -200,
            east: 200,
        };
        this.map = new google.maps.Map(this.mapNode, {
            center: { lat: 0, lng: 0 },
            zoom: 3,
            minZoom: 2,
            restriction: {
                latLngBounds:MOON_BOUNDS,
                strictBounds: false,
            },
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ["moon"],
            },
        });
        this.MarkerManager = new MarkerManager(this.map)
        const getNormalizedCoord = (coord, zoom) => {
            const y = coord.y;
            let x = coord.x;
            // tile range in one direction range is dependent on zoom level
            // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
            const tileRange = 1 << zoom;

            // don't repeat across y-axis (vertically)
            if (y < 0 || y >= tileRange) {
                return null;
            }

            // repeat across x-axis
            if (x < 0 || x >= tileRange) {
                x = ((x % tileRange) + tileRange) % tileRange;
            }
            return { x: x, y: y };
        }
        const moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                const normalizedCoord = getNormalizedCoord(coord, zoom);

                if (!normalizedCoord) {
                    return "";
                }
                const bound = Math.pow(2, zoom);
                return (
                    "https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw" +
                    "/" +
                    zoom +
                    "/" +
                    normalizedCoord.x +
                    "/" +
                    (bound - normalizedCoord.y - 1) +
                    ".jpg"
                );
            },
            tileSize: new google.maps.Size(256, 256),
            maxZoom: 9,
            minZoom: 0,

            radius: 1738000,
            name: "Europa",
        });
        this.map.mapTypes.set("moon", moonMapType);
        this.map.setMapTypeId("moon");

        const updateSpots = this.props.updateSpotsFilter
        this.map.addListener('bounds_changed', function () {
            const { north, south, east, west } = this.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            // debugger
            // let northeast = this.getBounds().getNorthEast();
            // let southwest = this.getBounds().getSouthWest();
            // // debugger
            // let bounds = this.getBounds()

            // let lat = bounds.getNorthEast().lat();
            // let lat2 = bounds.getSouthWest().lat();
            // let lng = bounds.getNorthEast().lng();
            // let lng2 = bounds.getSouthWest().lng();

            // let positions = { lat: [lat, lat2], lng: [lng, lng2] }

            // debugger
            console.log('updated')
            // updateBounds(bounds)
            updateSpots('bounds', bounds)
        })



        this.MarkerManager.updateMarker(this.props.spots)
        
    }
    componentDidUpdate() {
        
        this.MarkerManager.updateMarker(this.props.spots);
    }
    
    


    render() {
        // debugger
        return (
            
            <div className="fix-to-screen">
                <div id='map-container2' ref={map => this.mapNode = map}>
               
                </div>
            </div>
        

        )
    }


}
export default MoonMap 


