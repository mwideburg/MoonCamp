
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SWITCH_LOGIN = 'SWITCH_LOGIN'
export const SWITCH_SIGNUP = 'SWITCH_SIGNUP'


export const openModal = (modalType, photos = []) => {
    // 
    return{
    type: OPEN_MODAL,
    modalType,
    photos: photos
    }
}
export const switchLogin = (modalType) => {
    // 
    return{
    type: SWITCH_LOGIN,
    modalType
    }
}
export const switchSignup = (modalType) => {
    // 
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

