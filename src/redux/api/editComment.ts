import { AxiosResponse } from 'axios';

import { Comment, CommentData } from '../../interfaces/comments';

import api from './api';

const editComment = (body: CommentData, commentId: number): Promise<AxiosResponse<Comment>> =>
  api.patch<Comment>(`comments/${commentId}`, body);

export default editComment;
