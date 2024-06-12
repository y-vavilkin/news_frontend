import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/reducers/rootReducer';
import { AppDispatch } from '../redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuthType = (state: RootState) => state.modal.type;
export const usePostId = (state: RootState) => state.currentUser.postId;
export const useCommentId = (state: RootState) => state.comments.commentId;
