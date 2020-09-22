import React from 'react';

// import { updateBounds } from '../../actions/filter_actions';
class Search extends React.Component{
    render(){
        return(
            <div key="search" className="search-form-container">
                <form action="" className="search-form">
                    <label htmlFor="search"></label>
                    <input type="text" className=""/>
                    <label htmlFor="date"></label>
                    <input type="date" name="date" id="date-btn"  />
  
                    <select className="btn-search">
                        <option value="planets">Planets</option>
                        <option value="jupiter">jupiter</option>
                        <option value="earth">earth</option>
                        <option value="saturn">saturn</option>
                    </select>
                    <button className="btn-search"> SEARCH</button>
                </form>
                
            </div>
        )

    }
}


export default Search;