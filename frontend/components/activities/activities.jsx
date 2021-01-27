import React from 'react';
import { Link } from 'react-router-dom';
class Activities extends React.Component {

    render(){
        const spots = Object.values(this.props.spots)
        const tea = spots.filter(spot => spot.title === "Alien History")[0].id
        const teaPath = `spots/${tea}`
        const rover = spots.filter(spot => spot.title === "Mars's Europa")[0].id
        const roverLink = `spots/${rover}`
        const golf = spots.filter(spot => spot.title === "Zues's Overwatch")[0].id
        const golfLink = `spots/${golf}`
        return(
            
        <div className="activities-container">

                <Link to={teaPath} className="img-links" id="img-1">
                    <div className="activity-link-image" id="picard-img">
                        <h2>EARL GRAY WITH PICARD</h2>
                        <h3>and it's always hot</h3>
                    </div>
                </Link>
                <Link to={roverLink} className="img-links" id="img-2">
                    <div className="activity-link-image" id="rover-img">
                            <h2>ROVERING ON EUROPA</h2>
                            <h3>the only way to travel</h3>
                    </div>
                </Link>
                <Link to={golfLink} className="img-links" id="img-3">
                    <div className="activity-link-image" id="golf-img">
                        <h2>GOLFING ON THE MOON</h2>
                        <h3>what a way to golf</h3>
                    </div>
                </Link>
        </div>
        )
    }
}

export default Activities;