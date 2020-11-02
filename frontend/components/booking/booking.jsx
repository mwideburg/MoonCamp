import React from 'react';

import { useParams, Link } from 'react-router-dom';

import PageFooter from '../footer/pages_footer'


class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            spot: this.props.spot
        }
        // debugger


    }
    componentDidMount() {
        debugger
        this.props.getSpot(this.props.match.params.spotId).then(spot => {
            // debugger
            this.props.getHost(spot.spot.spot.host_id)
        })

        // this.setState({spot: this.props.getSpot(this.props.spotId)})

    }


    render() {

        if (this.state.spot === undefined){
            return null
        }
        debugger

        return (
            <div className="show-wrapper">


                <PageFooter spot={this.props.spot} />
            </div>
        )
    }


}

export default Booking;