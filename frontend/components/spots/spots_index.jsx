import React from 'react';
import { Link, Route } from 'react-router-dom';
import Spot from './spot_single_view'
import SpotShow from './spot_show_container'


class SpotsIndexContainer extends React.Component{
    constructor(props) {
        super(props)
        // this.state = this.props.spots
        

    }
    componentDidMount() {
        // debugger
        // this.props.getSpots();
    }
    // componentDidMount() {
    //     // debugger
    //     this.props.getSpots();
    // }

    render(){
        
        let count = 0
        const spots = Object.values(this.props.spots).map(spot =>
            <div key={spot.id}>
                <Spot spot={spot} />
                
            </div>
                

            
            )
        return(
                <>
                
                <div className="spots-wrapper">
                    {spots}

                    
                </div>
                </>

        )


    }
}

export default SpotsIndexContainer;
