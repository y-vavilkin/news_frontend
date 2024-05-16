import { ModalAction, ModalState, TypeModal } from '../../interfaces/modal';

import * as actionTypes from '../actions/actionTypes/modal';

const initialState: ModalState = {
  isModalOpen: false,
  type: TypeModal.REGISTRATION
};

const modalReducer = (state: ModalState = initialState, action: ModalAction): ModalState => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        type: action.payload
      };
    default:
      return state;
  }
};

export default modalReducer;
