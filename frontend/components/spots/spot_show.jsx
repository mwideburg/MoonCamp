import React from 'react';

import { useParams, Link } from 'react-router-dom';
import HostDetail from './host_details'
import CampsiteInfo from './campsite_info'
import TerrainContainer from './terrain_icons'
import CategoryActivityContainer from './spot_instructions'
import SpotActivityIcons from './spot_activity_icons'
import PageFooter from '../footer/pages_footer'
import ReviewsContinaer from './reviews_container'
import { removeSave } from '../../actions/spot_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, farHeart, faSpaceShuttle, faGasPump, faAtom } from '@fortawesome/free-solid-svg-icons';
class SpotShow extends React.Component {
    constructor(props){
        
        super(props)
        this.state = {
            host:{},
            bookings: {},
            start: '',
            end: '',
            guests: 0,
            bookContent: 'Instant Book',
            showStart: "close",
            showEnd: "close",
            total: 0,
            days: 0,
            guests: 1,
            submit: false,
            saved: '',
  
            
        }
        // 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.checkDays = this.checkDays.bind(this);
        this.checkTotal = this.checkTotal.bind(this);
        this.saveSpot = this.saveSpot.bind(this);
        this.removeSave = this.removeSave.bind(this);

    }

    componentDidMount(){
        // 
        this.props.getSpot(this.props.match.params.spotId).then(spot => {
            // 
            this.props.getHost(spot.spot.spot.host_id)
            let saved = Object.values(this.props.user.saved).map(save => save.spot_id).includes(spot.spot.spot.id)
            
            this.setState({saved: saved})
        })
        // this.setState({spot: this.props.getSpot(this.props.spotId)})
        
    }
    componentDidUpdate(prevProps) {
        // `prevProps` is passed in by React
        if (this.props.match.params.spotId !== prevProps.match.params.spotId) {
            this.props.getSpot(this.props.match.params.spotId);}
            
    }
    
    updateState(field){
            if(this.state.start != ''){
               
                document.getElementById("startDate").classList.remove("red")
                
            }
            if(this.state.end != ''){
               
                document.getElementById("endDate").classList.remove("red")
                
            }
            if(parseInt(this.state.guests) === parseInt(this.props.spot.max_guests)){
                document.getElementById("max").classList.add("fade-inout")
                
            }
            
            return e => this.setState({
        
                [field]: e.currentTarget.value
            })

    }
     checkDays(){
         if (this.state.start != '' && this.state.end != '') {
             const end = new Date(this.state.end)
             const start = new Date(this.state.start)
             const days = parseInt((end - start) / (24 * 3600 * 1000))

             return days
            }else{
             return 0
            }
     }
     checkTotal(){
         if (this.state.start != '' && this.state.end != '') {
             const end = new Date(this.state.end)
             const start = new Date(this.state.start)
             const days = parseInt((end - start) / (24 * 3600 * 1000))
            

             return (days * this.props.spot.price)
            }else{
            return 0
            }
     }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.start === ''){
            document.getElementById("startDate").classList.add("red")
            return null
        }
        if(this.state.end === ''){
            document.getElementById("endDate").classList.add("red")
            
            return null
        }
        const end = new Date(this.state.end)
        const start = new Date(this.state.start)
        const days = parseInt((end - start) / (24 * 3600 * 1000))
        const total = days * this.props.spot.price
        const price = this.state.guests / 3 
       const booking = {spot_id: this.props.spot.id, host_id: this.props.host.id, start_date: this.state.start, end_date: this.state.end, user_id: this.props.user_id, total: total, guests: this.state.guests}
        const dateform = document.getElementById("date-form")
        dateform.classList.add('close')
        document.getElementById("max").classList.remove("fade-inout")
        document.getElementById("quantity").classList.add("disable-inner")
        // document.getElementById("booking-btn").classList.add("view-booking")
        
       this.props.requestBooking(booking).then(this.setState({bookContent: 'View Booking Details', submit: true}))

    }

    saveSpot(e){
        
        this.props.saveSpot({spot_id: this.props.spot.id, user_id: this.props.user_id})
        this.setState({ saved: true })
    }
    removeSave(e){
        const spotId = this.props.spot.id
        let saves = Object.values(this.props.user.saved).filter(save => save.spot_id === spotId)
        
        let save = saves[0].id
        this.props.removeSave(save)
        this.setState({saved: false})
    }
    


    render() {
        // 
        if(!this.props.spot){
            return null
        }
    
        const photos = this.props.spot.photoUrls
        const spot = this.props.spot
        const openModal = (photos) => this.props.openModal('gallery', photos)
        let bookBtn
        // 
        if(!this.state.submit){
            bookBtn = <button type="submit" className="btn-search instant" id="booking-btn"> {this.state.bookContent}</button>
        }else{
            
            let path
            let booking = Object.values(this.props.booking)
            if (booking.length != 0){
                
                let bookingId = Object.values(this.props.booking)[0].id
                path = `/bookings/${bookingId}`

            }else{
                path ='/'
            }
            
            bookBtn = (
            <Link to={path}>
                    <button type="submit" className="btn-search instant view-booking" id="booking-btn"> {this.state.bookContent}</button>
            </Link>

            )
        }
    
    let saveBtn
        if (this.state.saved){
            
          
            saveBtn = <button id="save-btn" className='save-btn saved' onClick={() => this.removeSave()}> <FontAwesomeIcon icon={faHeart} color="red" /> Saved  </button>
        }else{
            
            saveBtn = <button id="save-btn" className='save-btn' onClick={() => this.saveSpot()}> <FontAwesomeIcon icon={faHeart} color="black" /> Save </button>
        }

        
        
        return (
            <div className="show-wrapper">
                   <div className="show-img-container">
                       
                        <div className="galery-container" onClick={() => openModal('gallery')}>

                            <img src={photos[0]} alt="" className="show-img-full" />

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
                                    {saveBtn}
                                </div>
                            </div>
                        </div>


                        
                    </div>
                    <HostDetail host={this.props.host} spot={this.props.spot}/>
                    <CampsiteInfo host={this.props.host} spot={this.props.spot}/>
                    
                        
                    <SpotActivityIcons spot={this.props.spot} />
                      
                    <TerrainContainer spot={this.props.spot} />
                    <ReviewsContinaer spot={this.props.spot} />
                    
                    
                    </div>  
                    

                        <div className="column-filler">
                            <div className="price-show-container">

                                <div className="price-title">
                                    <h2> ${(parseInt(this.state.guests) / 3 > 1) ? ((parseInt(this.state.guests / 3)) * 5) + spot.price : spot.price}</h2>

                                per night
                            </div>
                                
                                <form onSubmit={this.handleSubmit} className="">
                                    <div className="num-guests">
                                        <label htmlFor="quantity">Number of Guests </label>
                                        <input type="number" id="quantity" 
                                        name="quantity" 
                                        min="1" 
                                        max={this.props.spot.max_guests} 
                                        placeholder="1" 
                                        disabled={(this.state.submit) ? "disabled" : ""}
                                        onChange={this.updateState('guests')}
                                            ></input> 
                                        <p id="max" className="opa-0">max</p>
                                    
                                    </div>
                                    <div className="instant-book" id="date-form">
                                        <div className="dates-guests" >

                                            <label htmlFor="startDate"></label>
                                            <br />

                                            <input type="date"
                                                name="startDate"
                                                id="startDate"
                                                className="instant-book-btn"
                                                placeholder="Check In"
                                                onChange={this.updateState('start')}
                                            />
                                            <label htmlFor="endDate" ></label>
                                            <br />

                                            <input type="date" name="endDate"
                                                id="endDate"
                                                className="instant-book-btn"
                                                placeholder="Check Out"
                                                onChange={this.updateState('end')} />

                                            

                                        </div>
                                    </div>
                                    
                                    <div className="sub-total">
                                    <p>
                                    Number of Days: {this.checkDays()}
                                    </p>
                                    <p>
                                    Subtotal: ${this.checkTotal()}

                                    </p>



                                    </div>
                                    <div className="instant-book">
                                        <div className="dates-guests" >
                                            {bookBtn}
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        
                        

                        
                    </div>

                   
                    
                </div>
                

                <PageFooter spot={this.props.spot} />
            </div>
        )
    }


}

export default SpotShow;