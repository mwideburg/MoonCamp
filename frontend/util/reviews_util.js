

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data_type: 'json',
        data: review
    })
}
export const updateReview = (review) => {
    return $.ajax({
        method: 'PUT',
        url: '/api/reviews',
        data_type: 'json',
        data: review
    })
}
export const getReview = (review) => {
    return $.ajax({
        method: 'get',
        url: `/api/reviews/${review.id}`
    })
}
export const deleteReview = (review) => {
    return $.ajax({
        method: 'delete',
        url: `/api/reviews/${review.id}`
    })
}