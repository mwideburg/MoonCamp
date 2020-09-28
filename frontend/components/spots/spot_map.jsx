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
        
        // const updateBounds = this.props.updateBounds
        const updateSpots = this.props.updateSpots
        this.map.addListener('bounds_changed', function () {
            // debugger
            let northeast = this.getBounds().getNorthEast();
            let southwest = this.getBounds().getSouthWest();
            // debugger
            let bounds = this.getBounds()

            let lat = bounds.getNorthEast().lat();
            let lng2 = bounds.getNorthEast().lng();
            let lng = bounds.getSouthWest().lng();
            let lat2 = bounds.getSouthWest().lat();
            let positions = { bounds: {lat: [lat, lat2], lng: [lng, lng2]} }
        
            // debugger
            console.log('updated')
            // updateBounds(bounds)
            updateSpots(positions)
        })
        
     
       
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
//    
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