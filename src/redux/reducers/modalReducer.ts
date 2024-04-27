import { ModalAction, ModalState } from '../../interfaces/modal';
import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes';

const initialState: ModalState = {
  isModalOpen: false,
  type: null
};

export default function modalReducer (state: ModalState = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        type: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        type: action.payload
      };
    default:
      return state;
  }
}
