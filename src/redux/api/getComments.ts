import { AxiosResponse } from 'axios';

import { Comment } from '../../interfaces/comments';

import api from './api';

const getComments = (postId: number): Promise<AxiosResponse<Comment[]>> =>
  api.get<Comment[]>(`comments/${postId}`);

export default getComments;
