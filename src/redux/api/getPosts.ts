import { AxiosResponse } from 'axios';

import { type Post } from '../../types';
import api from './api';

const getPosts = async (): Promise<AxiosResponse<Post[], []>> => await api.get<Post[]>('posts');

export default getPosts;
