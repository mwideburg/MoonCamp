import React from 'react';


const TripContainer = (props) => {
    
    if(Object.values(props.props.bookings).length === 0){
        return null
    }
    debugger
    const bookings = props.props.bookings
    const allSpots = props.props.spots
    return Object.values(bookings).map(booking => {
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
}

export default TripContainer