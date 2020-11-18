import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faFacebookF} from '@fortawesome/free-solid-svg-icons';



const PageFooter = () => {
    return(
        <>
        
        <div className="covid">
            <div className="wrapper-600">
                <div className="warning">
                    <FontAwesomeIcon icon={faExclamationTriangle} /> Safety First
                    <h1>
                        Don't worry...
                    </h1>
                    <p>
                        Here at moon camp we always take health first, that's why we are giving any moon campers free space suits, to ensure no cross contamination during this rought time.
                    </p>

                        <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" className="warning-btn">
                                learn more
                    </a>
                </div>

            </div>
            


        </div>

            <footer >

                <div className="footer-container">


                    made by michael wideburg with a lot of love and guidance from app academy
                    <div className="icon-list">
                        <a href="https://www.facebook.com/mwideburg" target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a href="https://twitter.com/shagandbigfoot?lang=en" target="_blank"><i className="fab fa-fw fa-twitter"></i></a>
                        <a href="https://github.com/mwideburg" target="_blank"><i className="fab fa-fw fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/michael-wideburg-01331b34/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a href="https://angel.co/u/michael-wideburg-1" target="_blank"><i className="fab fa-fw fa-angellist"></i></a>

                    </div>
                    
                    <button className="help-button"> ? Help </button>

                </div>


            </footer>

        </>

    )
}

export default PageFooter;