import React from 'react';
import { Link, Route } from 'react-router-dom';
import Spot from './spot_single_view'
import FiltersContainer from './filters_continer'
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
            <div key={spot.id} className="single-spot-contain">
                <Spot spot={spot} />
                
            </div>
                

            
            )
        return(
                <>
               


                
                
                <div>
                        <div className="spots-wrapper">
                            {spots}


                        </div>



                </div>
                

                
                </>

        )


    }
}

export default SpotsIndexContainer;
