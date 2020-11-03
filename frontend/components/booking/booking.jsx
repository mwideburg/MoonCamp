import React from 'react';

import { useParams, Link } from 'react-router-dom';

import PageFooter from '../footer/pages_footer'


class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spot: this.props.spot,
            booking: this.props.booking,
            host: this.props.host
        }
        // debugger


    }
    // componentDidMount() {
    //     debugger
    //     this.props.getBooking(this.props.match.params.bookingId).then(spot => {
    //         // debugger
    //         this.props.getHost(spot.spot.spot.host_id)
    //     })

    //     // this.setState({spot: this.props.getSpot(this.props.spotId)})

    // }


    render() {

        if (this.state.spot === undefined){
            return null
        }
        
        const start = new Date(this.state.booking.start_date).toString()
        const end = new Date(this.state.booking.end_date).toString()
        const photo = this.state.spot.photoUrls[0]

        return (
            <div className="show-wrapper">
                <div className="spots-img">
                    <img src={photo} className="spots-img" alt="" />
                </div>
                <h3> Your trip to: </h3>
                {this.state.spot.title}
                <h3>
                    START DATE: 
                </h3>
                {start}
                <h3>
                    END DATE: 
                </h3>
                {end}
                <h3>Guests:</h3>{this.state.booking.guests}
                

                <PageFooter spot={this.props.spot} />
            </div>
        )
    }


}

export default Booking;