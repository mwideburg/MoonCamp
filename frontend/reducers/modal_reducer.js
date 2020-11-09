import {OPEN_MODAL, CLOSE_MODAL, SWITCH_SIGNUP, SWITCH_LOGIN} from '../actions/modal_actions'

const _nullModalState = {
    modalType: null
}


const modalReducer = (state = _nullModalState, action) =>{
    
    Object.freeze(state)
    switch (action.type) {
        case OPEN_MODAL:
            
            return Object.assign({}, {modalType: action.modalType, photos: action.photos})
        case SWITCH_SIGNUP:
            
            return Object.assign({}, {modalType: action.modalType})
        case SWITCH_LOGIN:
            
            return Object.assign({}, {modalType: action.modalType})
        case CLOSE_MODAL:
            return Object.assign({}, action.modalType)
        default:
            return state;
    }
}

export default modalReducer;