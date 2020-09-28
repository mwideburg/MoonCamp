import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './spot_single_view'
import MarkerManager from '../../util/marker_manager'

class SpotMap extends React.Component {
    //...

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 42.728119, lng: -87.886997 }, // this is SF
            zoom: 12
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)
        // debugger
        // this.props.getSpots()
        this.MarkerManager.updateMarker(this.props.spots)
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarker(this.props.spots);
    }

    render() {
        return (
            // ...
            <div id='map-container' ref={map => this.mapNode = map}> 

            </div>

            )
        }


    }

import { connect } from 'react-redux';

// import SearchSpots from "./search_spots";

// const mapSTP = (state) => {
//     // debugger
//     return {
//         spots: state.entities.spots
//     }
// }
// const mapDTP = () => dispatch => {
//     return {
//         getSpots: () => dispatch(getSpots())
//         // updateBounds : (bounds) => dispatch(updateBounds(bounds))
//     }
// }

// export default connect(mapSTP, mapDTP)(SpotMap)
export default SpotMap 