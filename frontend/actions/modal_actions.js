import modalReducer from "../reducers/modal_reducer"

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SWITCH_LOGIN = 'SWITCH_LOGIN'
export const SWITCH_SIGNUP = 'SWITCH_SIGNUP'


export const openModal = (modalType, photos = []) => {
    // debugger
    return{
    type: OPEN_MODAL,
    modalType,
    photos: photos
    }
}
export const switchLogin = (modalType) => {
    // debugger
    return{
    type: SWITCH_LOGIN,
    modalType
    }
}
export const switchSignup = (modalType) => {
    // debugger
    return{
    type: SWITCH_SIGNUP,
    modalType
    }
}


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

