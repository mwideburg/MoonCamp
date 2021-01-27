import React from 'react';

import MoonMap from './moon_map'

import FiltersContainer from './filters_container'
import SpotsIndexContainer from "./spots_container";



const SearchSpots = ( {spots, updateSpotsFilters, updateBounds, updateSpots, removeFilter, amenities} ) => {
        
                
        
        return(
            <>
            <div className="splash-container spot-search-index">
                    <div className="search filter-top">
                        <FiltersContainer updateSpotsFilter={updateSpotsFilters} spots={spots} removeFilter={removeFilter} amenities={amenities}/>
                    </div>
            <div className="spots-search-wrapper">
                <div className="spots-search-container">
                    <div className="spots-index">
                            <SpotsIndexContainer />
                    </div>
                    
                    <div className="maps-search-view">
                          
                                <MoonMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots} updateSpotsFilter={updateSpotsFilters}/>
                           
                    </div>
                </div>


            </div>
                
            </div>
                <footer className="stick-bottom">

                    <div className="footer-container">


                        made by michael wideburg with a lot of love and guidance from app academy
                    <button className="help-button"> ? Help </button>

                    </div>


                </footer>


            </>
            )
}

export default SearchSpots