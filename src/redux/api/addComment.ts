import { AxiosResponse } from 'axios';

import { Comment, CommentData } from '../../interfaces/comments';

import api from './api';

const addComment = (body: CommentData, postId: number): Promise<AxiosResponse<Comment>> =>
  api.post<Comment>(`comments/${postId}`, body);

export default addComment;
