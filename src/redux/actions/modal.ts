import { ModalAction, TypeModal } from '../../interfaces/modal';

import * as actionTypes from './actionTypes/modal';

export const openModal = (payload: TypeModal): ModalAction => ({
  type: actionTypes.TOGGLE_MODAL,
  payload
});

export const closeModal = (): ModalAction => ({
  type: actionTypes.TOGGLE_MODAL
});
