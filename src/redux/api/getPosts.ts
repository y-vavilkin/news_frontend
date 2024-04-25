import { AxiosResponse } from 'axios';

import { Post } from '../../types';

import api from './api';

const getPosts = (): Promise<AxiosResponse<Post[], []>> => api.get<Post[]>('posts');

export default getPosts;
