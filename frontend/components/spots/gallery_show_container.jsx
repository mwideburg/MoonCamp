
import React from 'react';




import { useParams, Link, withRouter } from 'react-router-dom';
import HostDetail from './host_details'
import CampsiteInfo from './campsite_info'

class GalleryContainer extends React.Component {


    render() {
        // 
        if (!this.props.spot) {
            return null
        }
        const photos = this.props.spot.photoUrls
        const spot = this.props.spot

        // 

        return (
            <div className="gallery-img">
               

                <img src={photos[0]} alt="" id="gallery-img" />

            </div>
        )
    }
} 



import { connect } from 'react-redux';

import { getSpot, getHost } from '../../actions/spot_actions'
import { openModal, closeModal } from '../../actions/modal_actions'
// import getSpots from '../../actions/spot_actions'
import SpotShow from "./spot_show";

const mapSTP = (state, prevProps) => {
    const spotId = parseInt(prevProps.location.pathname.slice(7))
    // 

    const spot = state.entities.spots[spotId]
    // 
    // const host = state.entities.host[spot.host_id]

    return {
        spot: spot,

    }
}
const mapDTP = dispatch => {
    // 
    return {
       

    }
}

export default withRouter(connect(mapSTP, mapDTP)(GalleryContainer))