import { Comment, CommentAction, CommentState } from '../../interfaces/comments';
import * as actionTypes from '../actions/actionTypes/comments';

const initialState: CommentState = {
  isLoading: false,
  isLoadingDelete: false,
  error: null,
  comments: [],
  inputText: '',
  commentId: -1
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
        isLoading: true
      };
    case actionTypes.ADD_COMMENT_RECEIVED:
      return {
        ...state,
        isLoading: false,
        comments: [action.payload as Comment, ...state.comments]
      };
    case actionTypes.ADD_COMMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? null
      };
    case actionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: typeof action.payload === 'string' ? action.payload : ''
      };
    case actionTypes.DELETE_COOMENT_REQUESTED:
      return {
        ...state,
        isLoadingDelete: true
      };
    case actionTypes.DELETE_COOMENT_RECEIVED:
      return {
        ...state,
        isLoadingDelete: false,
        comments: state.comments.filter(comment => comment.id !== state.commentId)
      };
    case actionTypes.DELETE_COOMENT_FAILED:
      return {
        ...state,
        isLoadingDelete: false,
        error: action.error ?? null
      };
    case actionTypes.SET_COMMENT_ID:
      return {
        ...state,
        commentId: typeof action.payload === 'number' ? action.payload : -1
      };
    default:
      return state;
  }
};

export default commentsReducer;
