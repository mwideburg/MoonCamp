import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faThumbsUp, faThumbsDown, faHeart } from '@fortawesome/free-solid-svg-icons';
class Spot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoNum: 0
        }
        this.nextPhoto = this.nextPhoto.bind(this)
        this.lastPhoto = this.lastPhoto.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    nextPhoto() {
        let old = this.state.photoNum
        let len = this.props.spot.photoUrls.length
        let num = (old + 1) % len
        this.setState({ photoNum: num })
    }
    lastPhoto() {
        let old = this.state.photoNum
        let len = this.props.spot.photoUrls.length
        let num = (old - 1)
        if (num < 0) {
            num = len - 1
        }
        this.setState({ photoNum: num })
    }
    render(){
        const photos = this.props.spot.photoUrls
        const spot = this.props.spot
        const id =  this.props.spot.id
        const path = `/spots/${id}`
        let icon
        let color
        if(this.props.spot.rating < 85){
            icon = <FontAwesomeIcon icon={faThumbsDown}/>
            color = 'red'
        }else{
            icon = <FontAwesomeIcon icon={faThumbsUp} />
            color = 'green'
        }
        return(
            <div className="recent-views-container" >
                <div className="spots-img">
                    <img src={photos[this.state.photoNum]} className="spots-img img-hover" alt=""/>
                    <button className='gallery-button single-btn-left' onClick={() => this.lastPhoto()}><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <button className='gallery-button single-btn-right' onClick={() => this.nextPhoto()}><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
                <Link to={path} className="spot-details">
                    <div className="spot-details">
                        <div className="spot-data titles-sing">
                        <h3 className="spot-title">{spot.title}</h3>
                        {/* <button className='heart-me'> <FontAwesomeIcon icon={faHeart}/> </button> */}
                        </div>
                        <p> {spot.planet}</p>
                        <div className="spot-data">
                            {/* this.props.reviews and whatever */}
        <p className={color}>{icon} {this.props.spot.rating}% </p>
                            {this.props.spot.num_reviews} Reviews
                            <p>{spot.price}/day</p>
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
    
    
}
export default Spot;