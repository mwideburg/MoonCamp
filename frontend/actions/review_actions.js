import * as APIUtil from '../util/reviews_util'
export const RECIEVE_REVIEW = 'RECIEVE_REVIEW'

export const recieveReview = (review) => {
    return {
        type: RECIEVE_REVIEW,
        review
    }
}


export const createReview = (review) => dispatch => {
    // debugger
    return (

        APIUtil.createReview(review).then(review => (
            dispatch(recieveAmenities(review))
        ))
    )
};