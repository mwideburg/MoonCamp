import React from 'react';
import { Link } from 'react-router-dom';

class Spot extends React.Component {
    render(){
        const spot = this.props.spot
        return(
            <div className="recent-views-container">
                {/* map through activities to put them on the splash with a limit */}
                {/* have a single acitivty-item that will render a list item with the picture
            and link to the specific search content page */}
                {/* place inside a ul */}
                <div className="spots-img">
                    {/* <img src="https://media4.s-nbcnews.com/i/newscms/2018_11/2359311/180312-3d-printed-lunar_base-al-1133_48d6508c6ac9277f6a5cec9c152b1b8e.jpg" alt=""/> */}
                </div>
                <Link to="/" className="spot-details">
                    <div className="spot-details">
                        <h3 className="spot-title">{spot.title}</h3>
                        <p> {spot.planet}</p>
                        <div className="spot-data">
                            {/* this.props.reviews and whatever */}
                            <p>59 reviews</p>
                            <p>{spot.price}/day</p>
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
    
    
}


    // < h2 > { spot.title }</h2> 
    //             <p>{spot.description}</p>
    //             <p>{spot.price}</p>
    //             <p>{spot.moon}</p>
    //             <p>{spot.planet}</p>

export default Spot;