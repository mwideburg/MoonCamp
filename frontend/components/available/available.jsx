
import React from 'react';
import { Link } from 'react-router-dom';

class Availablemod extends React.Component {
    render(){
        
        const spot1 = Object.values(this.props.spots)[0]
        const photo1 = Object.values(this.props.spots)[0].photoUrls[0]
        const id1 = Object.values(this.props.spots)[0].id
        const path1 = `/spots/${id1}`
        const spot2 = Object.values(this.props.spots)[4]
        const photo2 = Object.values(this.props.spots)[4].photoUrls[0]
        const id2 = Object.values(this.props.spots)[4].id
        const path2 = `/spots/${id2}`
        const spot3 = Object.values(this.props.spots)[7]
        const photo3 = Object.values(this.props.spots)[7].photoUrls[0]
        const id3 = Object.values(this.props.spots)[7].id
        const path3 = `/spots/${id3}`
        return(
            
        <div className="available-container">
            {/* map through activities to put them on the splash with a limit */}
            {/* have a single acitivty-item that will render a list item with the picture
            and link to the specific search content page */}
            {/* place inside a ul */}

                <div className='available-spot'>


                <Link to={path1} className="img-links">
                    


                    <div className="planet-link-image">
                        <img src={photo1} alt=""/>
                            
                        {/* <img className="contain-img" src="https://www.universetoday.com/wp-content/uploads/2019/06/pia22949.jpg" alt="" /> */}
                        
                        
                    </div>

                    
                </Link>
                    <center><h2>{spot1.title}</h2>
                    <p>{spot1.moon}</p>
                    </center>
                </div>
                <div className='available-spot'>


                    <Link to={path2} className="img-links">



                        <div className="planet-link-image">
                            <img src={photo2} alt="" />

                            {/* <img className="contain-img" src="https://www.universetoday.com/wp-content/uploads/2019/06/pia22949.jpg" alt="" /> */}


                        </div>


                    </Link>
                    <center><h2>{spot2.title}</h2>
                        <p>{spot2.moon}</p>
                    </center>
                </div>
                <div className='available-spot'>


                    <Link to={path3} className="img-links">



                        <div className="planet-link-image">
                            <img src={photo3} alt="" />

                            {/* <img className="contain-img" src="https://www.universetoday.com/wp-content/uploads/2019/06/pia22949.jpg" alt="" /> */}


                        </div>


                    </Link>
                    <center><h2>{spot3.title}</h2>
                        <p>{spot3.moon}</p>
                    </center>
                </div>
        </div>
        )
    }
}

export default Availablemod;