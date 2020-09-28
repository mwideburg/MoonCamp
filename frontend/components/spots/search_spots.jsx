import React from 'react';
import { Link } from 'react-router-dom';
import SpotMap from './spot_map'
import SpotsIndexContainer from "./spots_container";
// import { updateBounds } from '../../actions/filter_actions';


const SearchSpots = ( {spots, updateBounds, updateSpots} ) => {
    
        
            // debugger
        return(
            <>
            <div className="spots-search-wrapper">

                <div className="spots-search-container">
                    <div className="spots-index">
                            <SpotsIndexContainer />
                    </div>
                    
                    <div className="maps-search-view">
                            <SpotMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots}/>
                    </div>
                </div>


            </div>

            </>
            )
}

export default SearchSpots