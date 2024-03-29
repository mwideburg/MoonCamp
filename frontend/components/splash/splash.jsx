import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import ActivitiesContainer from '../activities/activities_container';
import PlanetContainer from '../planets/planets'
import AvailableContainer from '../available/available_container'
import PageFooter from '../footer/pages_footer'

class Splash extends React.Component {
    componentDidMount(){
        
        this.props.getSpots()
        this.props.getAmenities()
    }
    
    render(){
        if(Object.values(this.props.spots).length < 14){
            return null
        }
        const ender = Object.values(this.props.spots).filter(spot => spot.title === "Buggers Cave")[0].id
        const enderLink = `spots/${ender}`
        return(
            <div>
            <div className="splash-container">
                <div className="modal-container">
                    <div className="elevator-container">

                        <div className="elevator-pitch">
                            <h1>WELCOME TO MOONCAMP</h1>
                            <h3>
                                Camp out on your favorite moon and gaze into the universe, seeing stars with unrelenting clarity.
                            </h3>
                        </div>

                    </div>


                </div>
                <div className="search">
                    <SearchContainer />
                </div>



                <div>
                    {/* RECENET VIEWS */}
                </div>

                <div className="space-container">
                    <div className="space-image">
                        <p>EXPLORE YOUR DESTINY</p>
                    </div>
                </div>


                <h1>EXPERIENCE SPACE</h1>
                <div className="activities-wrapper">
                    <ActivitiesContainer />
                </div>
                    <br/>
                    <p></p>
                    <br/>
                <h1>FIND YOUR MOON</h1>
                <div className="planets-wrapper">
                    <PlanetContainer />
                </div>

                <div className="moon-highlight">
                    <div className="space-image">
                        <img src="" alt=""/>
                        <div className="detail-container">
                            <h3>MEET THE PEQUENINOS ON CASTILLO</h3>
                            <p>Ender gives tours of the tree creatures</p>
                            <br />
                            <Link to={enderLink}><button className=""> ENDERS GAME</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <h1>AVAILABLE NEXT WEEK</h1>
                <div className="available-container">

                    <AvailableContainer />
                    
                </div>
                <br />
                {/* <div className="host-review-container">

                    <div className="offset-frame">

                        <div className="worf">
                            <img className="worf" src="worf.jpg" alt=""/>
                        </div>

                        <div className="worf-container">
                            <div className="detail-container offset">
                                <div className="offset-text">
                                <h3>MEET THE BEST HOST... WORF</h3>
                                <p>"I am known to be a fierce warrior, but a dosile host. 
                                    Come stay with me and enjoy Gagh: A Klingon delicacy, live serpent worms.
                                    Or maybe you would like to battle it out in my customized holodeck..."</p>
                                <br />
                                </div>
                                        <button id="offset-btn"> <a href="https://www.youtube.com/watch?v=edflm7Hh3hs&feature=youtu.be" target="_blank">CAMP OUT WITH WORF</a></button>
                                <Link to='/spots'><button id="offset-btn-2"> START SEARCHING </button></Link>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
                <PageFooter />
        </div>
        )
    }


}

export default Splash