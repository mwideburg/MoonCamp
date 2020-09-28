export const getSpots = () => {
    // debugger
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data_type: 'json'
    })
}
export const filterSpots = () => {
    // debugger
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data_type: 'json',
        data: {filters}
    })
}
export const getSpot = (spotId) => {
    return $.ajax({
        method: 'get',
        url: `/api/spots/${spotId}`,
        data_type: 'json'
    })
}
