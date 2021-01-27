import React from 'react';

import { useParams, Link } from 'react-router-dom';
import AmenityChecklist from './amenities_checklist'
import PageFooter from '../footer/pages_footer'
import HostDetail from '../spots/host_details'

class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spot: this.props.spot,
            booking: this.props.booking,
            host: this.props.host,
            amenities: this.props.amenities
        }
        this.cancelReservation = this.cancelReservation.bind(this);
    }
    componentDidMount(){
        
        window.scrollTo(0, 0)
        this.props.getSpot(this.props.booking.spot_id).then(spot => {
            this.props.getHost(spot.spot.spot.host_id)
            
        })
    }

    cancelReservation(){
        this.props.cancelReservation(this.state.booking).then(this.props.history.replace('/spots'))
    }
    getBookings(){
        this.props.getBookings(this.state.booking.user_id).then(this.props.history.replace(`/users/${this.props.user_id}/trips`))
    }
    
    render() {
        if (this.props.spot === undefined){
            return null
        }
        
        const start = new Date(this.state.booking.start_date).toDateString()
        const end = new Date(this.state.booking.end_date).toDateString()
        const photo = this.state.spot.photo[0]
        let path = `/spots/${this.state.spot.id}`
        
        return (
            <div className="booking-wrapper">
                <h1 className="booking-title"> Your trip to: {this.state.spot.title}</h1>
                <div className="flex w-1000">
                <div className="w-600 flex-col">
                <h3> Amenities Available</h3>

                <AmenityChecklist spot={this.props.spot}/>
                <div className="b-top">
                    <h2> Meet Your Host {this.props.host.name}</h2>
                    

                </div>
                <HostDetail host={this.props.host} spot={this.props.spot} />
                </div>

                    <div className="w-300">

                    <div className="obj-fit-fill">
                        <img src={photo} className="obj-fill" alt="" />
                    </div>
                    
                    <h4>
                            <b>Check in: </b>{start}
                    </h4>
                    
                    <h4>
                        <b>Check out:</b> {end}
                    </h4>
                    
                    <h4>Guests: {this.state.booking.guests}</h4>
                    <Link to={path}> View Spot</Link>
                    <br/>
                        <button onClick={() => this.cancelReservation()} className="btn-search instant view-booking"> Cancel Reservation</button>
                        <button onClick={() => this.getBookings()} className="btn-search instant view-booking"> Get Bookings</button>
                    </div>
                </div>
                

                <PageFooter spot={this.props.spot} />
            </div>
        )
    }


}

export default Booking;