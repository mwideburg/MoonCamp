import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import SpotMap from './spot_map'
import MoonMap from './moon_map'
import MarsMap from './mars_map'
import FiltersContainer from './filters_container'
import SpotsIndexContainer from "./spots_container";
import { updateFilters } from '../../actions/filter_actions';
// import { updateBounds } from '../../actions/filter_actions';


const SearchSpotsMars = ( {spots, updateSpotsFilters, updateBounds, updateSpots, amenities} ) => {

      
                

        return(
            <>
            <div className="splash-container spot-search-index">
                    <div className="search filter-top">
                        <FiltersContainer updateSpotsFilter={updateSpotsFilters} spots={spots} amenities={amenities}/>
                    </div>
            <div className="spots-search-wrapper">
                <div className="spots-search-container">
                    <div className="spots-index">
                            <SpotsIndexContainer />
                    </div>
                    
                    <div className="maps-search-view">
                            {/* <SpotMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots}/> */}
                                <MarsMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots} />
                            {/* <MoonMap spots={spots} updateBounds={updateBounds} updateSpots={updateSpots} /> */}
                           
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



const mapDispatchToProps = dispatch => {
    return {
        updateSpotsFilter: (planet) => dispatch(updateSpotsFilter({ amenities: planet }))
    }
};
export default SearchSpotsMars