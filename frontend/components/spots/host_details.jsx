import React from 'react';


const HostDetail = ({host, spot}) => {
    debugger
    const photo = host.photoUrl
    return(
        <div className="host-details">
        <div className="host-name-photo">
            <img src={photo} alt="" className="host-img"/>
            <br/>
            {host.firstname}, {host.lastname}

        </div>
        <div className="spot-description">
            
                <p> {spot.description}</p>

        </div>

        </div>

    )
}

export default HostDetail