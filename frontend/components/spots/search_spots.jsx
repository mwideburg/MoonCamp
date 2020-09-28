import React from 'react';
import { Link } from 'react-router-dom';
import SpotMap from './spot_map'
import SpotIndex from './spots_index'


const SearchSpots = ( {spots} ) => {
    

            // debugger
        return(
            <>
            <div className="spots-search-wrapper">

                <div className="spots-search-container">
                    <div className="spots-index">
                            {/* <SpotIndex spots={spots}/> */}
                    </div>
                    
                    <div className="maps-search-view">
                            <SpotMap spots={spots}/>
                    </div>
                </div>


            </div>

            </>
            )
}





export default SearchSpots