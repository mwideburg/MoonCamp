import React from 'react';

import {Link} from 'react-router-dom'

// import { updateBounds } from '../../actions/filter_actions';
class FiltersContainer extends React.Component{
    render(){
        return(
            <div key="search" className="search-form-container filter-form">
                
                <button className="filter-btn"><i class="fab fa-free-code-camp"></i> Dates </button>
                    <button className="filter-btn"> Earth </button>
                    <button className="filter-btn"> Lodging </button>
                    <button className="filter-btn"> Jetpacks </button>
                
                
            </div>
        )

    }
}


export default FiltersContainer;