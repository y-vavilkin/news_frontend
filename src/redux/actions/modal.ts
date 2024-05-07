import { ModalAction } from '../../interfaces/modal';
import * as actionTypes from './actionTypes/modal';

export const openModal = (payload: string): ModalAction => ({
  type: actionTypes.TOGGLE_MODAL,
  payload
});

export const closeModal = (): ModalAction => ({
  type: actionTypes.TOGGLE_MODAL
});
