import * as APIUtil from '../util/amenities_util'
export const RECIEVE_AMENITIES = 'RECIEVE_AMENITIES'

export const recieveAmenities = (amenities) => {
    return {
        type: RECIEVE_AMENITIES,
        amenities
    }
}


export const getAmenities = () => dispatch => {
    // debugger
    return (

        APIUtil.getAmenities().then(amenities => (
            dispatch(recieveAmenities(amenities))
        ))
    )
};