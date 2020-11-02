import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import DemoContainer from '../session_form/demo_form_container';
import LogInFormContainer from '../session_form/login_fix_container';
import SearchContainer from '../search/search_container';
import ActivitiesContainer from '../activities/activities_container';
import PlanetContainer from '../planets/planet_container'
import AvailableContainer from '../available/available_container'
import RecentViewConatiner from '../recent_views/recent_view_container';
import Spot from '../recent_views/spots_placeholder'
import PageFooter from '../footer/pages_footer'
class Splash extends React.Component {
    render(){
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
                    {/* <div className="recent-views">
                        <RecentViewConatiner />
                    </div> */}
                </div>

                <div className="space-container">
                    <div className="space-image">
                        <p>EXPLORE YOUR DESTINY</p>
                        {/* <img src="" alt=""/> */}
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
                            <h3>MEET THE PEQUENINOS ON TITAN</h3>
                            <p>Ender gives tours of the tree creatures</p>
                            <br />
                            <><button className=""> ENDERS GAME</button></>
                        </div>
                    </div>
                </div>
                <br />
                <h1>AVAILABLE NEXT WEEK</h1>
                <div className="available-container">

                    <AvailableContainer />
                    
                </div>
                <br />
                {/* <div className="available-container">

                    <Available />
                    <Available />
                    <Available />
                </div> */}
                <div className="host-review-container">

                    <div className="offset-frame">

                        <div className="worf">
                            <img className="worf" src="https://cnet4.cbsistatic.com/img/r-p-OqNgNZMOl62QZqWFWkgaQa0=/940x0/2016/09/02/41f02b67-d8ff-4179-8c32-a0f0c5bdfd7f/tng-worf00000993d.jpg" alt=""/>
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
                            <button id="offset-btn"> CAMP OUT WITH WORF</button>
                            <button id="offset-btn-2"> START SEARCHING </button>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
                <PageFooter />
                </div>
        )
    }


}

export default Splash