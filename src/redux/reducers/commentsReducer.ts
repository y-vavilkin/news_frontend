import { CommentAction, CommentState } from '../../interfaces/comments';
import * as actionTypes from '../actions/actionTypes/comments';

const initialState: CommentState = {
  isLoading: false,
  error: null,
  comments: []
};

const commentsReducer = (
  state: CommentState = initialState,
  action: CommentAction
): CommentState => {
  switch (action.type) {
    case actionTypes.COMMENTS_REQUESTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.COMMENTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        comments: action.payload ?? []
      };
    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    default:
      return state;
  }
};

export default commentsReducer;
