import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';



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

                    <button className="warning-btn">
                                learn more
                    </button>
                </div>

            </div>
            


        </div>

            <footer >

                <div className="footer-container">


                    made by michael wideburg with a lot of love and guidance from app academy
                    <button className="help-button"> ? Help </button>

                </div>


            </footer>

        </>

    )
}

export default PageFooter;