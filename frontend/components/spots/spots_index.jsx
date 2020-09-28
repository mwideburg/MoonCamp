import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './spot_single_view'


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
            <div key={count}>
                <Spot spot={spot} />
                {count ++}
            </div>
                

            
            )
        return(

                <div className="spots-wrapper">
                    {spots}

                    
                </div>
          

        )


    }
}

export default SpotsIndexContainer;
