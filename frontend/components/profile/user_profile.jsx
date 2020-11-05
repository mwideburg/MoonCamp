import React from 'react';

import { useParams, Link, } from 'react-router-dom';
import PageFooter from '../footer/pages_footer'
import HostDetail from '../spots/host_details'
import BookingSingle from '../booking/booking_single'
class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            bookings: {},
            spots: this.props.spots
            
        }


        this.cancelReservation = this.cancelReservation.bind(this);
        this.linkTo = this.linkTo.bind(this);
    }
    componentDidMount(){
        
        
        this.props.getBookings(this.state.user)
 
    }
    componentDidUpdate(){
        
    }
    cancelReservation(booking) {

        const bookingId = booking.id
        this.props.cancelReservation(booking).then(this.removeBooking(bookingId))
    }
    
    removeBooking(bookingId){
        document.getElementById(bookingId).classList.add("close")
    }

    getBookings() {


        this.props.getBookings(this.state.booking.user_id).then(this.props.history.replace('/spots'))
    }

    linkTo(path){
        debugger
        // this.props.history.location.state = {replace: true}
        this.props.history.push(path)
    }

    render() {

        if (this.state.user === undefined) {
            
            return null
        }
        let trips
        if (this.props.bookings){
            
            const bookings = Object.values(this.props.bookings).map(booking => booking.spot_id)
            if (bookings.length > 0 && Object.values(this.props.spots).length === 0){
                this.props.filterSpots({bookings: bookings})
            }
            debugger
            
           
            
        } else{
            trips = <center>No current Trips</center>
        }
        if(Object.values(this.props.spots).length > 0){
            const bookings = this.props.bookings
            const allSpots = this.props.spots
            trips = (
                Object.values(bookings).map(booking => {
                    const path = `/spots/${booking.spot_id}`
                    const path2 = `/bookings/${booking.id}`
                    const spot = allSpots[booking.spot_id]
                    const bookingId = booking.id
                    const start = new Date(booking.start_date).toDateString()
                    const end = new Date(booking.end_date).toDateString()
                    const replace = true


                    return (<div key={booking.id} id={booking.id} className="w-600 booking-single">

                        <div className="flex-col center">
                            <div className="spot-img">

                                <img src={spot.photoUrls[0]} className="spots-img" alt="" />
                            </div>
                            <br />
                            <h4>{spot.title}</h4>
                        </div>
                        <div className="flex-col">

                            <h4>
                                <b>Check in: </b>{start}
                            </h4>

                            <h4>
                                <b>Check out:</b> {end}
                            </h4>

                            <h4>Guests: {booking.guests}</h4>
                            <Link to={path}> View Spot</Link>
                            <Link to={path2}> View Booking Details</Link>
                            <br />
                            <button onClick={() => this.cancelReservation(booking)} className="btn-search instant view-booking"> Cancel Reservation</button>


                        </div>
                    </div>)
                })
            )
        }
        

        
        
        const user = this.state.user
        
        
        return (
            <>
            <div className="profile-wrapper">
                
              <div className="profile-container">

                <div className="sidebar-profile">
                    <div className="sidebar-container">
                    <h3> {user.firstname}</h3>


                    </div>

                </div>

                <div className="content-container">
                    <h1>TRIPS</h1>
                    
                    {trips}
                </div>


              </div>
                


            </div>
                <PageFooter spot={this.props.spot} />
                </>
        )
    }


}

export default Profile;