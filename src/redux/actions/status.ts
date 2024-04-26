import { UserStatusAction } from '../../interfaces/status';
import { CHECK_USER_STATUS, CHECK_USER_STATUS_FAILURE, CHECK_USER_STATUS_SUCCESS } from '../actionTypes';

export const checkUserStatus = (): UserStatusAction => ({
  type: CHECK_USER_STATUS
});

export const checkUserStatusSuccess = (): UserStatusAction => ({
  type: CHECK_USER_STATUS_SUCCESS
});

export const checkUserStatusFailure = (): UserStatusAction => ({
  type: CHECK_USER_STATUS_FAILURE
});
