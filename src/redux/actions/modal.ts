import { ModalAction } from '../../types';
import * as actionTypes from '../actionTypes';

export const openModal = (payload: string): ModalAction => ({
  type: actionTypes.OPEN_MODAL,
  payload
});

export const closeModal = (): ModalAction => ({
  type: actionTypes.CLOSE_MODAL,
  payload: null
});
