export const getAmenities = () => {
    
    return $.ajax({
        method: 'get',
        url: '/api/amenities',
        
    })
}