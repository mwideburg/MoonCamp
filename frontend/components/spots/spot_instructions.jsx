import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const SpotInstructions = () => {
    return (
            
            <div className="details-spot">
                   
                    <div className="short-col">
                        Details
                    </div>
                    <div className="col col-3">
                       
                    <p> <b>Check in: </b>
                      After 3PM  </p> 
                     <br />
                    <p>Check out: Before 2PM</p> 
                      <br />
                      <p>

                        Cancellation policy: Flexible

                      </p>
                                  
                    </div>
        <div className="col col-3">
                    <p>
                    On arrival: Meet and greet 

                    </p>
                       <br/>
                    <p>
                    Minimum nights: 1 night

                    </p>
                    <br/>
                    <p>
                    Accepts bookings: 15 months out
                    </p>
                    <p>
                    Weeknight discount: 25% off 

                    </p>
                    </div>

            </div>
           




    )
}

export default SpotInstructions