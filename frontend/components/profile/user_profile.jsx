import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faThumbsUp, faThumbsDown, faHeart, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link, NavLink, Switch, Route} from 'react-router-dom';
import PageFooter from '../footer/pages_footer'
import HostDetail from '../spots/host_details'
import BookingSingle from '../booking/booking_single'
import TripsContainer from './trips_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            bookings: {},
            spots: this.props.spots,
            wait: true,
            get: true
            
        }


        this.cancelReservation = this.cancelReservation.bind(this);
        this.linkTo = this.linkTo.bind(this);
        this.removeSave = this.removeSave.bind(this);
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        // this.props.getAmenities()
        // this.props.getBookings(this.state.user).then((bookings) => 
        // {   
        //     const filters = Object.values(bookings.bookings.bookings).map(booking => booking.spot_id)
        //     return (
        //     this.props.filterSpots({ bookings: filters })
        // )
        // }
        // ).then(spots => this.setState({get: false}))
   
        this.setState({wait: false})
        
        
    }
    componentDidUpdate(){
        

    }
    removeSave(save) {
        
        this.props.removeSave(save.id)
        
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
        
        // this.props.history.location.state = {replace: true}
        this.props.history.push(path)
    }

    render() {

        let trips
        if (this.state.wait) {
            // if (this.props.bookings) {

            //     const bookings = Object.values(this.props.bookings).map(booking => booking.spot_id)
            //     if (this.state.get) {
            //         this.props.filterSpots({ bookings: bookings })

            //         return null
            //     }




            // } else {
            //     trips = <center>No current Trips</center>
            // }
            return null
        }
        
        let tripCount
        let saveCount
        
        // if(!this.state.get){
            
            const bookings = this.state.user.bookings
            let saves = this.state.user.saved
            // const allSpots = this.state.spots
            
            tripCount = Object.values(bookings).length
            saveCount = Object.values(saves).length
            trips = (
                Object.values(bookings).map(booking => {
                    const path = `/spots/${booking.spot_id}`
                    const path2 = `/bookings/${booking.id}`
                    const spot = booking.spot
                    
                    const bookingId = booking.id
                    const start = new Date(booking.start_date).toDateString()
                    const end = new Date(booking.end_date).toDateString()
                    const replace = true

                    
                    return (
                        
                        
                    <div key={booking.id} id={booking.id} className="w-700 booking-single">

                        <div className="flex-col center">
                            <div className="spot-img">

                                <img src={spot.photo[0]} className="spots-img profile-spots-img" alt="" />
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
                            <center>
                            <button onClick={() => this.cancelReservation(booking)} className="btn-search instant view-booking"> Cancel Reservation</button>

                            </center>
                        </div>
                    </div>
                    )
                })
            )
        // }
        
        
        const saveContainer = (
            Object.values(saves).map(save => {
                const path = `/spots/${save.spot_id}`
                let icon
                let color
                if (save.rating < 85) {
                    icon = <FontAwesomeIcon icon={faThumbsDown} color="red"/>
                    // color = 'red'
                } else {
                    icon = <FontAwesomeIcon icon={faThumbsUp} color="green" />
                    // color = 'green'
                }
                
                return (
                    <div key={save.id} className="booking-single w-700" >
                        {/* map through activities to put them on the splash with a limit */}
                        {/* have a single acitivty-item that will render a list item with the picture
            and link to the specific search content page */}
                        {/* place inside a ul */}
                        <div className="spots-img">
                            <img src={save.photoUrls[0]} className="spots-img profile-spots-img" alt="" />
                        </div>
                        
                        <div className="flex-col">
                       
                            <div className="">
                                <h3 className="spot-title">{save.title}</h3>
                                <p> Planet: {save.planet}</p>
                                <div className="spot-data save-data">
                                    {/* this.props.reviews and whatever */}
                                    <p>{icon} {save.rating}%  {save.num_reviews} Reviews</p>
                                    
             
                                    <p>${save.price}/day</p>
                                </div>
                                <Link to={path} > View Spot</Link>
                                <br/>
                                <button onClick={() => this.removeSave(save)} className="save-btn"> Remove Save</button>
                            </div>
                        </div>

                    </div>
                )

            })

        )
        
        const user = this.state.user
        const saveLink = `/users/${user.id}/saves`
        const tripLink = `/users/${user.id}/trips`
        const created_at = new Date(user.created_at)
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[created_at.getMonth()]
        const year = created_at.getFullYear()
        let content
        if(this.props.location.pathname.includes('saves')){
            content = saveContainer
        }else {
            
            content = trips
        }
        return (
            <>
            <div className="profile-wrapper">
                
              <div className="profile-container">

                <div className="sidebar-profile">
                    <div className="sidebar-container">
                    <h3> Hey, {user.firstname}</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHeart}  className="pd-r-10"/>Camper since {month} {year}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMapMarker} className="pd-r-10"/> Located on Earth

                        </li>
                    </ul>
                    
                    <br/>
                    MoonCampers: Campers have fun enjoying the sun in a whole new way
                    </div>
                    
                </div>

                <div className="content-container">
                    <ul className="profile-links">
                        <li className="">
                            
                            <NavLink to={tripLink} isActive={(match, location) => {
                                if(!match){
                                    return false
                                }
                                return true
                            }}
                            activeStyle={{
                                borderBottom: "3px solid #75ebb4"
                            }}
                            > Trips {tripCount}</NavLink>
                            
                        </li>
                        <li>

                                    <NavLink to={saveLink} isActive={(match, location) => {
                                        if (!match) {
                                            return false
                                        }
                                        return true
                                    }}
                                        activeStyle={{
                                            borderBottom: "3px solid #75ebb4"
                                        }}
                                    > Saves {saveCount}</NavLink>
                        </li>

                    </ul>
                    
                    
                    {content}
                </div>


              </div>
                


            </div>
                <PageFooter spot={this.props.spot} />
                </>
        )
    }


}

export default Profile;