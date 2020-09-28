export default UPDATE_BOUNDS = 'UPDATE_BOUNDS'

export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds: bounds
    }
}


// export const updateFilters = (filters, value) => {
//     return (dispatch, getState) => {
//         dispatch()
//     }
// }