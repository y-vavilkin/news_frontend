import { type Post } from '../../types';

import api from './api';

const getPosts = async () => await api.get<Post[]>('posts');

export default getPosts;
