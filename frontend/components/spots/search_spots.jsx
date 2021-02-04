import React from 'react';

import MoonMap from './moon_map'

import FiltersContainer from './filters_container'
import SpotsIndexContainer from "./spots_container";
import PageFooter from '../footer/pages_footer'


const SearchSpots = ({ spots, updateSpotsFilters, updateBounds, updateSpots, removeFilter, amenities, updateSpotsFiltersNoBack} ) => {
        
                
        
        return(
            <>
            <div className="splash-container spot-search-index">
                    <div className="search filter-top">
                        <FiltersContainer updateSpotsFilter={updateSpotsFiltersNoBack} spots={spots} removeFilter={removeFilter} amenities={amenities}/>
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
                <PageFooter />


            </>
            )
}

export default SearchSpots