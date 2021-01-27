
import React from 'react';
import { Link } from 'react-router-dom';

class Availablemod extends React.Component {
    render(){
        const spots = Object.values(this.props.spots)
        const spot1 = spots[0]
        const photo1 = spots[0].photoUrls[0]
        const id1 = spots[0].id
        const path1 = `/spots/${id1}`
        const spot2 = spots[4]
        const photo2 = spots[4].photoUrls[0]
        const id2 = spots[4].id
        const path2 = `/spots/${id2}`
        const spot3 = spots[7]
        const photo3 = spots[7].photoUrls[0]
        const id3 = spots[7].id
        const path3 = `/spots/${id3}`
        return(
            
        <div className="available-container">
                <div className='available-spot'>
                    <Link to={path1} className="img-links">
                        <div className="planet-link-image">
                            <img src={photo1} alt=""/>                    
                        </div>
                    </Link>
                    <center>
                        <h2>{spot1.title}</h2>
                        <p>{spot1.moon}</p>
                    </center>
                </div>
                <div className='available-spot'>
                    <Link to={path2} className="img-links">
                        <div className="planet-link-image">
                            <img src={photo2} alt="" />
                        </div>
                    </Link>
                    <center>
                        <h2>{spot2.title}</h2>
                        <p>{spot2.moon}</p>
                    </center>
                </div>
                <div className='available-spot'>
                    <Link to={path3} className="img-links">
                        <div className="planet-link-image">
                            <img src={photo3} alt="" />
                        </div>
                    </Link>
                    <center>
                        <h2>{spot3.title}</h2>
                        <p>{spot3.moon}</p>
                    </center>
                </div>
        </div>
        )
    }
}

export default Availablemod;