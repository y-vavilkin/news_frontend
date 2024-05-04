import { ModalAction, ModalState } from '../../interfaces/modal';
import * as actionTypes from '../actions/actionTypes/modal';

const initialState: ModalState = {
  isModalOpen: false,
  type: null
};

export default function modalReducer (state: ModalState = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        type: action.payload ?? null
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        type: null
      };
    default:
      return state;
  }
}
