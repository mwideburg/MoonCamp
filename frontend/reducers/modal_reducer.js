import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'

const _nullModalState = {
    modalType: null
}


const modalReducer = (state = _nullModalState, action) =>{
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case OPEN_MODAL:
            // debugger
            return Object.assign({}, {modalType: action.modalType})
        case CLOSE_MODAL:
            return Object.assign({}, action.modalType)
        default:
            return state;
    }
}

export default modalReducer;