import { AxiosResponse } from 'axios';

import api from './api';

const deletePost = (postId: number): Promise<AxiosResponse<string>> =>
  api.delete<string>(`posts/${postId}`);

export default deletePost;
