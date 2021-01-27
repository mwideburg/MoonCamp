
import React from 'react';




import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
class GalleryContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photoNum: 0
        }
        this.nextPhoto = this.nextPhoto.bind(this)
        this.lastPhoto = this.lastPhoto.bind(this)
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    nextPhoto(){
        let old = this.state.photoNum
        let len = this.props.spot.photoUrls.length
        let num = (old + 1) % len
        this.setState({photoNum: num})
    }
    lastPhoto(){
        let old = this.state.photoNum
        let len = this.props.spot.photoUrls.length
        let num = (old - 1)
        if(num < 0){
            num = len - 1
        }
        this.setState({ photoNum: num })
    }
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
                <button className='gallery-button modal-btn-left' onClick={() => this.lastPhoto()}><FontAwesomeIcon icon={faAngleLeft} /></button>

                <img className="modal-img" src={photos[this.state.photoNum]} alt="" id="gallery-img" />
                <button className='gallery-button modal-btn-right' onClick={() => this.nextPhoto()}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
        )
    }
} 



import { connect } from 'react-redux';

const mapSTP = (state, prevProps) => {
    const spotId = parseInt(prevProps.location.pathname.slice(7))
    const spot = state.entities.spots[spotId]
    return {
        spot: spot,
    }
}


export default withRouter(connect(mapSTP, null)(GalleryContainer))