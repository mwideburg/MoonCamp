import React from 'react';
import { Link } from 'react-router-dom';
import SpotMap from './spot_map'
import SpotsIndexContainer from "./spots_container";



class MoonMap extends React.Component {
    //...

    componentDidMount() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 },
            zoom: 1,
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ['moon']
            }
        });

        var moonMapType = new google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
                var normalizedCoord = getNormalizedCoord(coord, zoom);
                if (!normalizedCoord) {
                    return null;
                }
                var bound = Math.pow(2, zoom);
                return '//mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw' +
                    '/' + zoom + '/' + normalizedCoord.x + '/' +
                    (bound - normalizedCoord.y - 1) + '.jpg';
            },
            tileSize: new google.maps.Size(256, 256),
            maxZoom: 9,
            minZoom: 0,
            radius: 1738000,
            name: 'Moon'
        });

        map.mapTypes.set('moon', moonMapType);
        map.setMapTypeId('moon');
        this.map = map


        
    }
    // getNormalizedCoord(coord, zoom) {
    //     var y = coord.y;
    //     var x = coord.x;

    //     // tile range in one direction range is dependent on zoom level
    //     // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    //     var tileRange = 1 << zoom;

    //     // don't repeat across y-axis (vertically)
    //     if (y < 0 || y >= tileRange) {
    //         return null;
    //     }

    //     // repeat across x-axis
    //     if (x < 0 || x >= tileRange) {
    //         x = (x % tileRange + tileRange) % tileRange;
    //     }

    //     return { x: x, y: y };
    // }
    // componentDidUpdate() {
    //     // this.MarkerManager.updateMarker(this.props.spots);
    // }

    render() {
        debugger
        return (
            <div>
                HELLO
           { this.map}

            
            </div>

        )
    }


}
// export default MoonMap 

import { connect } from 'react-redux';

import SearchSpots from "./search_spots";

const mapSTP = () => {
   
    return {
        // spots: state.entities.spots
    }
}
const mapDTP = () => dispatch => {
    return {
        // getSpots: () => dispatch(getSpots())
        // updateBounds : (bounds) => dispatch(updateBounds(bounds))
    }
}

export default connect(null, null)(MoonMap)
