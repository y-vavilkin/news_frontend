import { UpdateAction, UpdateState } from '../../interfaces/status';
import { UPDATE_USER_STATUS, CHECK_USER_STATUS_SUCCESS, CHECK_USER_STATUS_FAILURE } from '../actionTypes';

const initialState: UpdateState = {
  userOnline: false
};

export default function statusReducer (state = initialState, action: UpdateAction): UpdateState {
  switch (action.type) {
    case CHECK_USER_STATUS_SUCCESS:
      return {
        ...state,
        userOnline: true
      };
    case CHECK_USER_STATUS_FAILURE:
      return {
        ...state,
        userOnline: false
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        userOnline: action.payload ?? false
      };
    default:
      return state;
  }
}
