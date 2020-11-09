import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView, faIgloo, faSpaceShuttle, faGasPump, faAtom } from '@fortawesome/free-solid-svg-icons';


const CampsiteInfo = ({host, spot}) => {
    // debugger
    let livePlush = Object.values(spot.amenities)
    const amenList = livePlush.map(amen => {
        return(
            <li key={amen.id} id={amen.id}>

                <img src={amen.photo} alt="" className="list-icon"/>{amen.name}
                
            </li>

        )
        
    })
    let activities = Object.values(spot.activities)
    // debugger
    const actList = activities.map(act => {
       return (
           <li key={act.id}>
            
               <img src={act.photo} alt="" className="list-icon" /> {act.name}
        </li>
        )
    })
    return(
        <div className="spot-info">
            <div className="spot-info-list">
                <h3> Moonsite Area</h3>
                <div >
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faIgloo} color="gray"/> Biodome
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSpaceShuttle}  color="gray"/> Spaceship parking
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGasPump} color="gray"/> Rocket fuel available
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAtom} color="gray"/> Atmostphere not safe
                        </li>
                       

                    </ul>
                </div>


            </div>
        <div className="spot-info-list">
            <h3> Amenities</h3>
            <div >
                    <ul>
                        
                        {amenList}
                   
                    </ul>
            </div>
            

        </div>
        <div className="spot-info-list">
            
                <h3> Activities</h3>
                <div >
                    <ul>
                        {actList}
                    </ul>


                </div>

        </div>

        </div>

    )
}

export default CampsiteInfo