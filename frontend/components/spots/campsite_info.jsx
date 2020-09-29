import React from 'react';


const CampsiteInfo = ({host, spot}) => {
    // debugger
    return(
        <div className="spot-info">
        <div className="spot-info-list">
            <h3> Amenities</h3>
            <div >
                    <p>Oxygen Tanks</p>
                    <br />
                    <p>Space Suits</p>
                    <br />
                    <p>Telescope</p>
                    <br />
                    <p>Jetpacks</p>
                    <br />


            </div>
            

        </div>
        <div className="spot-info-list">
            
                <h3> Activities</h3>
                <div >
                    <p>Golf</p>
                    <br />
                    <p>Crator Tours</p>
                    <br />
                    <p>Anti Gravity World</p>
                    <br />
                    <p>Tea with Picard</p>
                    <br />


                </div>

        </div>

        </div>

    )
}

export default CampsiteInfo