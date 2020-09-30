import React from 'react';

import { useParams, Link } from 'react-router-dom';
import HostDetail from './host_details'
import CampsiteInfo from './campsite_info'

class SpotShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            host:{}
        }
        debugger
        
    }

    componentDidMount(){
        // debugger
        this.props.getSpot(this.props.match.params.spotId).then(spot => {
            debugger
            this.props.getHost(spot.spot.spot.host_id)
        })
        
        // this.setState({spot: this.props.getSpot(this.props.spotId)})
        
    }
    componentDidUpdate(prevProps) {
        // `prevProps` is passed in by React
        if (this.props.match.params.spotId !== prevProps.match.params.spotId) {
            this.props.getSpot(this.props.match.params.spotId);}
    }
    // getHost(){
    //     const host = this.props.getHost(this.props.spot.host_id)
    //     debugger
    //     return host
    // }

    render() {
        // debugger
        if(!this.props.spot){
            return null
        }
       
        const spot = this.props.spot
        
        // debugger
        const photo = spot.photoUrls[0]
        return (
            <div className="show-wrapper">
                   <div className="show-img-container">
                       <div className="galery-container">
                    <img src={photo} alt="" className="show-img-full"/>

                       </div>

                    </div>
                    <div className="price-show-container">

                        <div className="price-title">
                            <h2> ${spot.price}</h2>
                            
                                per night
                            </div>
                        <div className="instant-book">
                            <div className="dates-guests">
                                <button className="instant-book-btn"> 
                                <h3>
                                Check In
                                </h3>
                                <br/>
                                Select Dates
                                </button>
                                <button className="instant-book-btn"> Check Out</button>
                                <button className=" instant-book-btn"> Guests</button>

                            </div>
                        </div>
                        <div className="instant-book">
                            <div className="dates-guests">
                                <button className="btn-search instant"> Instant Book</button>


                            </div>
                        </div>
                    </div>
                   



                <div className="showpage-columns">
                    <div className="wrapper-1000">
                        <div className="wrapper-600">
                            
                            
                         
                    <div className="show-page-container">


                        <div className="show-details-contianer">
                            <div className="showpage-spot-details">
                                <div className="showpage-title">
                                    <p>     
                                        {spot.planet} -- {spot.moon}
                                    </p>
                                    <h1> {spot.title}  </h1> 
                                    Nearby: <Link to="/spots/"> Jupiter's Europa  </Link>
                                </div>
                                <div className="showpage-details-footer">
                                    
                                </div>
                            </div>
                        </div>


                        
                    </div>
                    <HostDetail host={this.props.host} spot={this.props.spot}/>
                    <CampsiteInfo host={this.props.host} spot={this.props.spot}/>
                    
                    </div>  
                    

                    <div className="column-filler">

                           
                    </div>
                    </div>

                    
                    
                </div>
                

                   
            </div>
        )
    }


}

export default SpotShow;