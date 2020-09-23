import React from 'react';
import { Link } from 'react-router-dom';

const SpotPlaceHolder = () => (
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
                <h3 className="spot-title">Euorpas Crator</h3>
                <p> Zues's Land</p>
                <div className="spot-data">
                    {/* this.props.reviews and whatever */}
                    <p>59 reviews</p>
                    <p>$6200/day</p>
                </div>
            </div>
        </Link>

    </div>
)

export default SpotPlaceHolder;