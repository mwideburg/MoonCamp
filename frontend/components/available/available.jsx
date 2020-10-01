
import React from 'react';
import { Link } from 'react-router-dom';

class Availablemod extends React.Component {
    render(){

        return(
            
        <div className="planets-container">
            {/* map through activities to put them on the splash with a limit */}
            {/* have a single acitivty-item that will render a list item with the picture
            and link to the specific search content page */}
            {/* place inside a ul */}

            
                <Link to={'/'} className="img-links">
                    <div className="planet-link-image" id="jupiter">
                        <h2>TITAN</h2>
                        {/* <img className="contain-img" src="https://www.universetoday.com/wp-content/uploads/2019/06/pia22949.jpg" alt="" /> */}
                        
                        
                    </div>
                </Link>
                <Link to={'/'} className="img-links">
                    <div className="planet-link-image" id="europa">
                        {/* <img src="https://i.pinimg.com/originals/65/67/07/656707ea1e9fad2b5b9111a06045fcb8.jpg" alt="" /> */}
                        <h2>ERUOPA</h2>
                        
                    </div>
                </Link>
                <Link to={'/'} className="img-links">
                    <div className="planet-link-image" id="earth">

                        {/* <img className="link-bg"src="https://i.pinimg.com/originals/65/67/07/656707ea1e9fad2b5b9111a06045fcb8.jpg"  alt=""/> */}
                        <h2>EARTH</h2>
                        



                    </div>
                </Link>
        </div>
        )
    }
}

export default Availablemod;