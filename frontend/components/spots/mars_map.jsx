import React from 'react';
import MarkerManager from '../../util/marker_manager'


class MarsMap extends React.Component {
    
    //...
    
    componentDidMount(){
        const MARS_BOUNDS = {
            north: 80,
            south: -80.35,
            west: -500,
            east: 500,
        };
        this.map = new google.maps.Map(this.mapNode, {
            center: { lat: 0, lng: 0 },
            zoom: 6,
            minZoom: 2,
            restriction: {
                latLngBounds:MARS_BOUNDS,
                strictBounds: false,
            },
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ["mars_elevation"],
            },
        });
        this.MarkerManager = new MarkerManager(this.map)
        const getHorizontallyRepeatingTileUrl = (coord, zoom, urlfunc) => {
            var y = coord.y;
            var x = coord.x;

            // tile range in one direction range is dependent on zoom level
            // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
            var tileRange = 1 << zoom;

            // don't repeat across y-axis (vertically)
            if (y < 0 || y >= tileRange) {
                return null;
            }

            // repeat across x-axis
            if (x < 0 || x >= tileRange) {
                x = (x % tileRange + tileRange) % tileRange;
            }

            return urlfunc({ x: x, y: y }, zoom)
        }
        const getMarsTileUrl = (baseUrl, coord, zoom) => {
            var bound = Math.pow(2, zoom);
            var x = coord.x;
            var y = coord.y;
            var quads = ['t'];

            for (var z = 0; z < zoom; z++) {
                bound = bound / 2;
                if (y < bound) {
                    if (x < bound) {
                        quads.push('q');
                    } else {
                        quads.push('r');
                        x -= bound;
                    }
                } else {
                    if (x < bound) {
                        quads.push('t');
                        y -= bound;
                    } else {
                        quads.push('s');
                        x -= bound;
                        y -= bound;
                    }
                }
            }

            return baseUrl + quads.join('') + ".jpg";
        }
        
        const moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                return getHorizontallyRepeatingTileUrl(coord, zoom, function (coord, zoom) {
                    return getMarsTileUrl("http://mw1.google.com/mw-planetary/mars/elevation/", coord, zoom);
                });
            },
            tileSize: new google.maps.Size(256, 256),
            isPng: false,
            maxZoom: 8,
            radius: 3396200,
            name: 'Titan',
            credit: 'Image Credit: NASA/JPL/GSFC'
        });
        this.map.mapTypes.set("mars_elevation", moonMapType);
        this.map.setMapTypeId("mars_elevation");

        const updateSpotsFilter = this.props.updateSpotsFilter
        this.map.addListener('idle', function () {
            const { north, south, east, west } = this.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
           
            updateSpotsFilter('bounds', bounds)
        })



        this.MarkerManager.updateMarker(this.props.spots)
        
    }
    componentDidUpdate() {
        this.MarkerManager.updateMarker(this.props.spots);
    }

    
    
    


    render() {
        // 
        return (
            
            <div >
                <div id='map-container2' ref={map => this.mapNode = map}>
               
                </div>
            </div>
        

        )
    }


}
export default MarsMap 


