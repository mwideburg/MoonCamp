import React from 'react';

import {Link} from 'react-router-dom'

// import { updateBounds } from '../../actions/filter_actions';
class Search extends React.Component{
   

    render(){

        return(
            <div key="search" className="search-form-container">
                <form action="" className="search-form">
                    <label htmlFor="search"></label>
                    <input type="search" id="search" className="search-input" placeholder="Try Jupiter or Europa"/>
                    <label htmlFor="date"></label>
                    <input type="date" name="date" id="date-btn" className="date-btn" />
  
                    <select className="btn-search btn-dropdown">
                        <option value="planets">Planets</option>
                        <option value="jupiter">jupiter</option>
                        <option value="earth">earth</option>
                        <option value="saturn">saturn</option>
                    </select>
                    <Link to="/spots" className="">
                    <button className="btn-search submit"> 
                        SEARCH
                    
                    </button>
                    </Link>
                </form>
                
            </div>
        )

    }
}


export default Search;