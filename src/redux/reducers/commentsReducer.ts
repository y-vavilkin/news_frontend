import { Comment, CommentAction, CommentState } from '../../interfaces/comments';
import * as actionTypes from '../actions/actionTypes/comments';

const initialState: CommentState = {
  isLoadingModal: false,
  isLoadingComment: false,
  error: null,
  comments: [],
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
        isLoadingModal: true
      };
    case actionTypes.COMMENTS_RECEIVED:
      return {
        ...state,
        isLoadingModal: false,
        comments: action.payload as Comment[]
      };
    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoadingModal: false,
        error: action.error ?? null
      };
    case actionTypes.ADD_COMMENT_REQUESTED:
    case actionTypes.EDIT_COMMENT_REQUESTED:
    case actionTypes.DELETE_COOMENT_REQUESTED:
      return {
        ...state,
        isLoadingComment: true
      };
    case actionTypes.ADD_COMMENT_RECEIVED:
      return {
        ...state,
        isLoadingComment: false,
        comments: [action.payload as Comment, ...state.comments]
      };
    case actionTypes.ADD_COMMENT_FAILED:
    case actionTypes.EDIT_COMMENT_FAILED:
    case actionTypes.DELETE_COOMENT_FAILED:
      return {
        ...state,
        isLoadingComment: false,
        error: action.error ?? null
      };
    case actionTypes.DELETE_COOMENT_RECEIVED:
      return {
        ...state,
        isLoadingComment: false,
        comments: state.comments.filter(comment => comment.id !== state.commentId)
      };
    case actionTypes.SET_COMMENT_ID:
      return {
        ...state,
        commentId: typeof action.payload === 'number' ? action.payload : -1
      };
    case actionTypes.EDIT_COMMENT_RECEIVED:
      return {
        ...state,
        isLoadingComment: false,
        comments: state.comments.map(comment =>
          comment.id === (action.payload as Comment).id
            ? { ...comment, ...action.payload as Comment }
            : comment
        )
      };
    default:
      return state;
  }
};

export default commentsReducer;
