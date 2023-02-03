
export const getSpots = (bounds) => {

    
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data_type: 'json',
        data: bounds
    })
}
export const getUserSpots = (bookings) => {
    
    
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data_type: 'json',
        data: {bookings: bookings}
    })
}
export const filterSpots = (data) => {
    
    return $.ajax({
        method: 'get',
        url: '/api/spots',
        data
    })
}
export const filterAmenSpots = (filters) => {

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
export const getBookings = (userId) => {

    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,

    })
}
export const cancelBooking = (booking) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/bookings/${booking.id}`
    })
}
export const createSave = (save) => {
    return $.ajax({
        method: 'POST',
        url: '/api/saves',
        data_type: 'json',
        data: {save}
    })
}

export const getSaves = (save) => {
    return $.ajax({
        method: 'get',
        url: `/api/users/${userId}/saves`,
    })
}

export const deleteSave = (save) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `/api/saves/${save}`
    })
}
