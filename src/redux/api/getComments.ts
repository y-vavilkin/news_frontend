import { AxiosResponse } from 'axios';

import { Comment } from '../../interfaces/comments';

import api from './api';

const getComments = (id: number): Promise<AxiosResponse<Comment[]>> =>
  api.get<Comment[]>(`comments/${id}`);

export default getComments;
