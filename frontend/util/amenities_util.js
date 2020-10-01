export const getAmenities = () => {
    debugger
    return $.ajax({
        method: 'get',
        url: '/api/amenities',
        
    })
}