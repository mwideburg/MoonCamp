import React from 'react';


const AmenityChecklist = (props) => {
    
    
    
    return Object.values(props.spot.amenities).map(amen => {
        return(
            <div key={amen.id} >
                <div className="flex amen-checklist">
                    <div className="amen-icon">
                        <img src={amen.photo} alt="" className="icon-activities"/>
                    </div>
                    <div className="amen-available">
                        {amen.description}
                    </div>

                </div>
            </div>
        )
    })
   

}

export default AmenityChecklist