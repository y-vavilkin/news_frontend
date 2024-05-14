import { AxiosResponse } from 'axios';

import { AddPost } from '../../interfaces/addPost';
import { Post } from '../../interfaces/posts';

import api from './api';

const addPost = (body: AddPost): Promise<AxiosResponse<Post>> => api.post<Post>('users', body, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default addPost;
