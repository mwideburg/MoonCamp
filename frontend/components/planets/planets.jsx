import React from 'react';
import { Link } from 'react-router-dom';
class Planets extends React.Component {
    render(){

        return(
            
        <div className="planets-container">
                <Link to={'/spots'} className="img-links">
                    <div className="planet-link-image" id="jupiter">
                        <h2>TITAN</h2>      
                    </div>
                </Link>
                <Link to={'/spots'} className="img-links">
                    <div className="planet-link-image" id="europa">
                        <h2>EUROPA</h2>  
                    </div>
                </Link>
                <Link to={'/spots'} className="img-links">
                    <div className="planet-link-image" id="earth">
                        <h2>EARTH</h2>
                    </div>
                </Link>
        </div>
        )
    }
}

export default Planets;