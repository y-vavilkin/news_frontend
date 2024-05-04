import { ModalAction } from '../../interfaces/modal';
import * as actionTypes from './actionTypes/modal';

export const openModal = (payload: string): ModalAction => ({
  type: actionTypes.OPEN_MODAL,
  payload
});

export const closeModal = (): ModalAction => ({
  type: actionTypes.CLOSE_MODAL
});
