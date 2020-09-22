import {SHOW_MODAL, HIDE_MODAL} from '../actions/modal_actions'

const _nullModalState = {
    modalType: null
}


const modalReducer = (state = _nullModalState, action) =>{
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case SHOW_MODAL:
            debugger
            return Object.assign({}, action.modalType)
        case HIDE_MODAL:
            return Object.assign({}, action.modalType)
        default:
            return state;
    }
}

export default modalReducer;