import React from 'react';

import {Link} from 'react-router-dom'

// import { updateBounds } from '../../actions/filter_actions';
class FiltersContainer extends React.Component{
    componentDidMount(){
        
    }

    handleClick(e, name, filter){
        
        if (document.getElementById(e.currentTarget.id).classList.value === "filter-btn"){
            document.getElementById(e.currentTarget.id).classList.add("filter-btn-selected")
            document.getElementById(e.currentTarget.id).classList.remove("filter-btn")
            this.props.updateSpotsFilters(name, filter)
        } else if (document.getElementById(e.currentTarget.id).classList.value === "filter-btn-selected"){
            document.getElementById(e.currentTarget.id).classList.add("filter-btn")
            document.getElementById(e.currentTarget.id).classList.remove("filter-btn-selected")
            this.props.removeFilter(name, filter)
        }

    }
    
    render(){
       
        return(
            <div key="search" className="search-form-container filter-form">
                
                <button id="oxy" className="filter-btn" onClick={(e) => this.handleClick(e, "oxygen", "Oxygen")}> <img src='/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--812b04871f94d5c78d953ea08b0b66486812bdfc/02.png' className="button-icon" />Oxygen </button>
                <button id="holo" className="filter-btn" onClick={(e) => this.handleClick(e, "holodeck", "Holodeck")} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq3gQwuK1OSjedG1uPy8uZ3utVBU35voUFZg&usqp=CAU' className="button-icon" /> Holodeck  </button>
                <button id="phas" className="filter-btn" onClick={(e) => this.handleClick(e, "phasers", "Phasers")}> <img src='/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cdcd3b6cfc7c797bdd1cf1c5059b76af3d3774be/phaser.png' className="button-icon" />Phasers </button>
               
                
                
                <Link to="/marsmap" className="planet-links-no">
                
                <button className="filter-btn" > <img src='https://cdn.iconscout.com/icon/free/png-256/mars-planet-astrology-solar-system-second-smallestterrestrial-4-20871.png' className="button-icon" />Saturn </button>
                </Link>
                <Link to="/spots" className="planet-links-no">
                <button className="filter-btn" > <img src='https://www.shareicon.net/data/256x256/2015/08/25/90723_planet_512x512.png' className="button-icon" />Earth </button>
                </Link>
                
            </div>
        )

    }
}


export default FiltersContainer;