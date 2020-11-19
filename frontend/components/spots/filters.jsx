import React from 'react';

import {Link} from 'react-router-dom'

// import { updateBounds } from '../../actions/filter_actions';
class FiltersContainer extends React.Component{
    componentDidMount(){
        this.props.getAmenities()
    }

    

    handleClick(e, name, filter){
        
        
        if(this.props.filter[name] != undefined){
            this.props.removeFilter(name, filter)
            document.getElementById(e.currentTarget.id).classList.remove("filter-btn-selected")
        }else{
            this.props.updateSpotsFilters(name, filter)
            document.getElementById(e.currentTarget.id).classList.add("filter-btn-selected")
        }
        // if (document.getElementById(e.currentTarget.id).classList.value === "filter-btn"){
        //     document.getElementById(e.currentTarget.id).classList.add("filter-btn-selected")
        //     document.getElementById(e.currentTarget.id).classList.remove("filter-btn")
        //     this.props.updateSpotsFilters(name, filter)
        // } else if (document.getElementById(e.currentTarget.id).classList.value === "filter-btn-selected"){
        //     document.getElementById(e.currentTarget.id).classList.add("filter-btn")
        //     document.getElementById(e.currentTarget.id).classList.remove("filter-btn-selected")
        //     this.props.removeFilter(name, filter)
        // }

    }
    
    render(){
        if(this.props.amenities.length === 0){
            return null
        }
        if (document.getElementById('holodeck') != null){
            if("holodeck" in this.props.filter){
                document.getElementById('holodeck').classList.add("filter-btn-selected")
                
            } else if ("phasers" in this.props.filter){
                
                
                document.getElementById('phasers').classList.add("filter-btn-selected")
                
            } else if ("oxygen" in this.props.filter){
                document.getElementById('oxygen').classList.add("filter-btn-selected")
                
            }

        }
        
        const phaserPhoto = this.props.amenities.filter(amen => amen.name === "Phasers")[0].photo
        const oxyPhoto = this.props.amenities.filter(amen => amen.name === "Oxygen")[0].photo
        const holoPhoto = this.props.amenities.filter(amen => amen.name === "Holodeck")[0].photo
        return(
            <div key="search" className="search-form-container filter-form">
                
                <button id="oxygen" className="filter-btn" onClick={(e) => this.handleClick(e, "oxygen", "Oxygen")}> <img src={oxyPhoto} className="button-icon" />Oxygen </button>
                <button id="holodeck" className="filter-btn" onClick={(e) => this.handleClick(e, "holodeck", "Holodeck")} ><img src={holoPhoto}  className="button-icon" /> Holodeck  </button>
                <button id="phasers" className="filter-btn" onClick={(e) => this.handleClick(e, "phasers", "Phasers")}> <img src={phaserPhoto} className="button-icon" />Phasers </button>
               
                
                
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