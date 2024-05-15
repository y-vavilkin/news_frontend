import { AxiosResponse } from 'axios';

import { UserAction } from './../../interfaces/user';
import { Post } from '../../interfaces/posts';

import api from './api';

const addPost = (body: UserAction): Promise<AxiosResponse<Post>> =>
  api.postForm<Post>('users', body);

export default addPost;
