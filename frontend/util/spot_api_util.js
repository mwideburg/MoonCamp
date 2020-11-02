// export const getSpots = () => {
//     // debugger
//     return $.ajax({
//         method: 'get',
//         url: '/api/spots',
//         data_type: 'json'
//     })
// }
export const getSpots = (bounds) => {
    // let lat = bounds.getNorthEast().lat();
    // let lng2 = bounds.getNorthEast().lng();
    // let lng = bounds.getSouthWest().lng();
    // let lat2 = bounds.getSouthWest().lat();
    // let positions = {lat: [lat, lat2], lng: [lng, lng2]}
    
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data_type: 'json',
        data: bounds
    })
}
export const filterSpots = (filters) => {
    // debugger
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        datatype: JSON,
        data: { filters }
    })
}
export const filterAmenSpots = (filters) => {
    // debugger
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        datatype: JSON,
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
export const getHost = (hostId) => {
    return $.ajax({
        method: 'get',
        url: `/api/users/${hostId}`,
        data_type: 'json'
    })
}

export const requestBooking = (booking) => {
    return $.ajax({
        method: "POST",
        url: '/api/bookings',
        data_type: 'json',
        data: {booking}

    })
}
