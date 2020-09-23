import modalReducer from "../reducers/modal_reducer"

export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'


export const openModal = (modalType) => {
    // debugger
    return{
    type: OPEN_MODAL,
    modalType
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

