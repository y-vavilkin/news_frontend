import { ModalAction, ModalState } from '../../interfaces/modal';
import { REGISTRATION } from '../../constants';
import * as actionTypes from '../actions/actionTypes/modal';

const initialState: ModalState = {
  isModalOpen: false,
  type: REGISTRATION
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
