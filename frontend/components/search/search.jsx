import { faFire, faLungs, faMoon, faShuttleVan, faSpaceShuttle, faStar, faUserAstronaut, faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {Link} from 'react-router-dom'
import {Example} from '../spots/date_picker'
// import { updateBounds } from '../../actions/filter_actions';
class Search extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           selected: 'all'
       }
       this.updateSelected = this.updateSelected.bind(this)
   }
   updateSelected(field){
    this.setState({selected: field})
    
   }
    showDropdown(){
        document.getElementById('planet-dropdown').style.display="block"
    }
    render(){
        let selectedText
        let selectedIcon
        switch (this.state.selected) {
            case "all":
                selectedIcon = <FontAwesomeIcon icon={faSpaceShuttle}></FontAwesomeIcon>
                selectedText = "All Listings"
                break;
            case "oxy":
                selectedIcon = <FontAwesomeIcon icon={faLungs}></FontAwesomeIcon>
                selectedText = "Oxygen"
                break;
            case "vr":
                selectedIcon = <FontAwesomeIcon icon={faVrCardboard}></FontAwesomeIcon>
                selectedText = "Holodeck"
                break;
            case "phase":
                selectedIcon = <FontAwesomeIcon icon={faFire}></FontAwesomeIcon>
                selectedText = "Phasers"
                break;
            
            default:
                break;
        }
        return(
            <div key="search" className="search-form-container">
                <form action="" className="search-form">
                    <label htmlFor="search"></label>
                    <input type="search" id="search" className="search-input" placeholder="Try Jupiter or Europa"/>
                    <label htmlFor="date"></label>
                    
                    <Example />
                    <button className="btn-search btn-dropdown btn-dropdown-splash" >
                        {selectedIcon} {selectedText}
                        <div className="dropdown-planet-search" id='planet-dropdown'>

                            <ul>
                                <li onClick={() => this.updateSelected('all')}>
                                     All Listings
                                </li>
                                <li onClick={() => this.updateSelected('oxy')}>
                                    Oxygen <FontAwesomeIcon icon={faLungs}/>
                                </li>
                                <li onClick={() => this.updateSelected('vr')}>
                                    Holodeck <FontAwesomeIcon icon={faVrCardboard} />
                                </li>
                                <li onClick={() => this.updateSelected('phase')}>
                                    Phaser <FontAwesomeIcon icon={faFire} />
                                </li>
                                
                            </ul>
                        </div>
                    </button>
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