import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const SpotActivityIcons = (spot) => {

    
    let activities = Object.values(spot.spot.activities)
    // 
    const actList = activities.map(act => {
       
        
        // 
        return (
            <div key={act.id} className="activity-descrition">
                <img src={act.photo} alt="" className="icon-activities"/>
                
                <h2>{act.name}</h2>
            <p>{act.description}</p>
            </div>
        )
    })
    return (

        <div className="details-spot clearfix">
            <h2> Activities</h2>
            <p> On moons, you don't have to do anything, but you could if you wanted to...</p>
            <br />
            
            {actList}

        </div>





    )
}

export default SpotActivityIcons