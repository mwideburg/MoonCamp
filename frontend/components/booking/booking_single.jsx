

import React from 'react';
import { Link } from 'react-router-dom'

const BookingSingle = ({bookings, spots, cancelReservation}) => {
    if(!bookings || Object.values(spots).length === 0){
        
        return null
    }
    const allSpots = spots
    const cancel = cancelReservation
    return Object.values(bookings).map(booking => {
        
            const path = `spots/${booking.spot_id}`
            const spot = allSpots[booking.spot_id]
            const bookingId = booking.id
            const start = new Date(booking.start_date).toDateString()
            const end = new Date(booking.end_date).toDateString()
            const replace = true
            
            
        return (<div key={booking.id} id={booking.id} className="w-600 booking-single">

            <div className="flex-col center">
                <div className="spot-img">

                <img src={spot.photoUrls[0]} className="spots-img" alt=""/>
                </div>
                <br/>
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
            <Link to={{pathname: path, state: spot.id}} > View Spot</Link>
            <br />
            <button onClick={() => cancelReservation(booking)} className="btn-search instant view-booking"> Cancel Reservation</button>


            </div>
        </div>)
    })


}

export default BookingSingle