import modalReducer from "../reducers/modal_reducer"

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'


export const showModal = (modalType) => {
    debugger
    return{
    type: SHOW_MODAL,
    modalType
    }
}

export const changeModal = modalType => dispatch => (
    dispatch(showModal(modalType))
)

export const hideModal = () => {
    return{
    type: HIDE_MODAL,
    }
}
