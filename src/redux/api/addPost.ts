import { AxiosResponse } from 'axios';

import { PostRequest } from '../../interfaces/user';
import { Post } from '../../interfaces/posts';

import api from './api';

const addPost = (body: PostRequest): Promise<AxiosResponse<Post>> =>
  api.postForm<Post>('users', body);

export default addPost;
