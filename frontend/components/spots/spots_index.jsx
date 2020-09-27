import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './spot_single_view'


class SpotsIndexContainer extends React.Component{
    constructor(props) {
        super(props)
        // debugger
        // this.state = this.props.spots
        

    }
    componentDidMount() {
        // debugger
        this.props.getSpots();
    }
    componentDidMount() {
        // debugger
        this.props.getSpots();
    }

    render(){
        // debugger
        const spots = this.props.spots.map(spot =>
            <div key={spot.id}>
                <Spot spot={spot} />
            </div>
                

            
            )
        return(

                <div className="recent-views-wrapper">
                    {spots}

                    
                </div>
          

        )


    }
}

export default SpotsIndexContainer;
