export const createSave = (spot_id, user_id) => {
    return $.ajax({
        method: 'POST',
        url: '/api/saves',
        data_type: 'json',
        data: {spot_id, user_id}
    })
}
export const getSaves = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/saves'
    })
}
export const deleteSave = (save) => {
    
    return $.ajax({
        method: 'DELETE',
        url: `/api/saves/${save.id}`
    })
}
