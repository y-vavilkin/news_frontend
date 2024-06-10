import { AxiosResponse } from 'axios';

import { PostRequest } from '../../interfaces/user';
import { Post } from '../../interfaces/posts';

import api from './api';

const editPost = (body: PostRequest, postId: number): Promise<AxiosResponse<Post>> =>
  api.patchForm<Post>(`posts/${postId}`, body);

export default editPost;
