import React from 'react';
import { Link } from 'react-router-dom';
import SpotMap from './spot_map'
import MoonMap from './moon_map'
import FiltersContainer from './filters_continer'
import SpotsIndexContainer from "./spots_container";
// import { updateBounds } from '../../actions/filter_actions';


const SearchSpots = ( {spots, updateBounds, updateSpots} ) => {
    
        
            // debugger
        return(
            <>
            <div className="splash-container spot-search-index">
                    <div className="search filter-top">
                        <FiltersContainer />
                    </div>
            <div className="spots-search-wrapper">
                <div className="spots-search-container">
                    <div className="spots-index">
                            <SpotsIndexContainer />
                    </div>
                    
                    <div className="maps-search-view">
                            {/* <SpotMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots}/> */}
                            <MoonMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots}/>
                    </div>
                </div>


            </div>
            </div>

            </>
            )
}

export default SearchSpots