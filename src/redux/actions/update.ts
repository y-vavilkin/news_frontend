import { UpdateAction } from '../../interfaces/status';
import { UPDATE_USER_STATUS } from '../actionTypes';

export const updateUserStatus = (isOnline: boolean): UpdateAction => ({
  type: UPDATE_USER_STATUS,
  payload: isOnline
});
