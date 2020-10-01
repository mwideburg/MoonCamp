import React from 'react';

import {Link} from 'react-router-dom'

// import { updateBounds } from '../../actions/filter_actions';
class FiltersContainer extends React.Component{

    handleClick(filter){
        let amenity = { amenities: filter}
        this.props.updateSpotsFilters(amenity)

    }
    render(){
        return(
            <div key="search" className="search-form-container filter-form">
                
                <button className="filter-btn" onClick={() => this.handleClick(285)}> <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEX///8AAADe3t5ERER3d3fW1tYRERHm5ubMzMyqqqru7u4ICAi9vb21tbWcnJwhISFKSkpQUFD19fWDg4M1NTUcHBxVVVU7OzuZmZlcXFyQkJCioqIWFhb39/fw8PBoaGgoKCh/f39ubm4/Pz/Dw8MuLi6RkZGrZy+/AAAEhklEQVR4nO2ba3uyMAyGi6LIwQPgCRVF5/b/f+KL2JRSQmE2bte7q883F21uNE2TtmPMysrKargCP83icZylvoeZPWEO3uL9sHZqrQ9nvZmaIXBDp6nwJvkIbi2zS4pwPDltnY7CPMXMPpn7PEPGfyjLteZLTuM/GXc4cJxd+T2fPzrNH+f+0Qf433U6KKMtSdYa8y4hAIg1DhwnXunN5v4P8njTVeZmKyzkuPmimg+m/ifS/FpFz6jKI/Sx4+j5kXwumcORIUA91iaS/hwtVffLu2ze1NRm/mdioHUz/XpKaO6aecerQ3NmBLCFYQo1sZ0L2X+hTrhAfEWZif8zREA4adlGUnQgv7QIntAkGfjgwUWMbg1wRcw3MJqk5As8BbayiK8Hf8gAzBcDAAglPJRFisLTDUygtQEA5JQv1LoHgAVqhhQ2fd1/Dh7mqDkCc4Sa52B+fVEMYAh8Lk/A3J4iD4kc8npp4uk9jMCMp1vBh1aQFuD/AJjTAOBzqF8TsRIZAjhj/PN6NUp9Q4BmEzFI+aFRWJkClOnw8K10NFcKHnOAsqI6ou/CNGtV+hQA5ap0R9+nykMaHRqAclXtL1GTq9pmUgKU0dhTH+2xLpQQoIzGVBON8wL9TFnzjjHtBpoVFV2JaaK2G2sfHeDbmqtBPcaWd++ivKucNp5DIq81rZ2t+qslqdLwVT8VGQDL1eAK3UY0+gpheKlWMDoAZJNnsxfuo0/lE7B4UAKUk2ar/J1Ho6duANQJixaAsbu6mRGXJk/5ceSUTQ3A2HHTNG081ky8YSpvqgiAi4vpMtAsV0RJ2gyFjDWiP1N6cPg7ZUkW3GSPJya9aBUub6oJJ/K2Ww1QtLvYtxWl0rwTAFiH/caq+NoCwPq7NwJEFsACWIAWwNVva08DsEeGvrYAtCKsilVZgN8HwFuhHwM4MbUd+GGAG/NaZx8/CfA4Zwhuy2mXaAA6h1+6Pcd6v75NZwEEgNn+AAGAmSzA6wBB/+BDZHCZo/Oc/Ds6ve6fXSkAsJ5rsAYtVXqZnFuWmqVibyeWen+x2+KKA9ytZIZNl9BNzQ7PK0EgyN0znKWEjAGfvP0IG4wGZ5YWAAE4BrX8NoAvmY9vAcAkAWCyAH8EYKPxcNLzbUgA1D1mWbH+rpnRFR6hSfczPm73TLp/g+nrlUBDs64be59Vor+ru/2gNcE6wOXNMInnG+nNVn9F0X5en3nOFn7j1Gt0PNbtUeAvXrmxoNfoEeobfpoUPDb8p9LyXJVFcOHt6zEvt0RXekF5IU9sfsQqZln6fP28P8pLBcNSUBWs/1WFC1ektmDl2zzP+htaQtpZCKVndW8Oyo2CG0UDVfmEvIlfMDMFqO71LfiLJTc223SsRLMAFoAOIB4OQDsLYOa5/QBQPNDmgeRZGD4vMOsBOCtNNVZr9iDg99v1AKw6H49J/rlCVuKnC77X0gPARoeUNgBU9QG8XRYAzvw++OucT/2QuAjpVM6bNVES8XsoxDWIRvdp019QtSZr8pnXLc9dZXKuT77iGL+Bb2VlZdWrfzNbRNMAbujAAAAAAElFTkSuQmCC' className="button-icon" />JetPacks </button>
                <button className="filter-btn" onClick={() => this.handleClick(287)} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq3gQwuK1OSjedG1uPy8uZ3utVBU35voUFZg&usqp=CAU' className="button-icon" /> Holodeck  </button>
                <button className="filter-btn" onClick={() => this.handleClick(282)}> <img src='https://cdn.iconscout.com/icon/free/png-256/igloo-1479433-1252679.png' className="button-icon" />Bio Dome </button>
                <button className="filter-btn" onClick={() => this.handleClick(284)}> <img src='https://cdn.iconscout.com/icon/free/png-256/mars-planet-astrology-solar-system-second-smallestterrestrial-4-20871.png' className="button-icon" />Saturn </button>
                <button className="filter-btn" onClick={() => this.handleClick(288)}> <img src='https://www.shareicon.net/data/256x256/2015/08/25/90723_planet_512x512.png' className="button-icon" />Earth </button>
                
                
            </div>
        )

    }
}


export default FiltersContainer;