import { AddPostAction, AddPostState } from '../../interfaces/addPost';
import { GLOBAL_ERROR } from '../../constants/errors';
import * as actionTypes from '../actions/actionTypes/user';

const initialState: AddPostState = {
  isLoading: false,
  error: null
};

const addPostReducer = (
  state: AddPostState = initialState,
  action: AddPostAction
): AddPostState => {
  switch (action.type) {
    case actionTypes.ADD_POST_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: typeof action.payload === 'string' ? action.payload : GLOBAL_ERROR
      };
    case actionTypes.ADD_POST_SUCCESSES:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addPostReducer;
