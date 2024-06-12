import { Comment, CommentAction, CommentState } from '../../interfaces/comments';
import * as actionTypes from '../actions/actionTypes/comments';

const initialState: CommentState = {
  isLoading: false,
  isLoadingModal: false,
  error: null,
  comments: [],
  inputText: ''
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
        comments: action.payload as Comment[]
      };
    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_COMMENT_REQUESTED:
      return {
        ...state,
        isLoadingModal: true
      };
    case actionTypes.ADD_COMMENT_RECEIVED:
      return {
        ...state,
        isLoadingModal: false,
        comments: [action.payload as Comment, ...state.comments]
      };
    case actionTypes.ADD_COMMENT_FAILED:
      return {
        ...state,
        isLoadingModal: false,
        error: action.error ?? null
      };
    case actionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: typeof action.payload === 'string' ? action.payload : ''
      };
    default:
      return state;
  }
};

export default commentsReducer;
