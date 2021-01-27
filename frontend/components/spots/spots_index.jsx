import React from 'react';
import Spot from './spot_single_view'

class SpotsIndexContainer extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)

    }


    render(){
        const spots = Object.values(this.props.spots).map(spot =>
                <div key={spot.id} className="single-spot-contain">
                    <Spot spot={spot} />
                </div>
            )
        return(
            <div>
                <div className="spots-wrapper">
                    {spots}
                </div>
            </div>
        )


    }
}

export default SpotsIndexContainer;
