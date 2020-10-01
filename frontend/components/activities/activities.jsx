import React from 'react';
import { Link } from 'react-router-dom';
class Activities extends React.Component {
    render(){

        return(
            
        <div className="activities-container">
            {/* map through activities to put them on the splash with a limit */}
            {/* have a single acitivty-item that will render a list item with the picture
            and link to the specific search content page */}
            {/* place inside a ul */}

                <Link to={'/'} className="img-links" id="img-1">
            <div className="activity-link-image" id="picard-img">
                        
             
                            <h2>EARL GRAY WITH PICARD</h2>
                            <h3>and it's always hot</h3>

                
                        
                    
            </div>
            </Link>
                <Link to={'/'} className="img-links" id="img-2">
            <div className="activity-link-image" id="rover-img">
                    {/* <img src="https://i.pinimg.com/originals/65/67/07/656707ea1e9fad2b5b9111a06045fcb8.jpg"  alt=""/> */}
                    <h2>ROVERING ON EUROPA</h2>
                    <h3>the only way to travel</h3>
            </div>
            </Link>
                <Link to={'/'} className="img-links" id="img-3">
                    <div className="activity-link-image" id="golf-img">
                        
                    {/* <img className="link-bg"src="https://i.pinimg.com/originals/65/67/07/656707ea1e9fad2b5b9111a06045fcb8.jpg"  alt=""/> */}
                    <h2>GOLFING ON THE MOON</h2>
                    <h3>what a way to golf</h3>
                    
                    
                    
            </div>
            </Link>
        </div>
        )
    }
}

export default Activities;