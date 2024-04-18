import { type Post } from '../../types';

import api from './api';

const delay = async (milliseconds: number) => {
  return await new Promise(resolve => setTimeout(resolve, milliseconds));
};

const getPosts = async () => {
  await delay(3000);
  return await api.get<Post[]>('posts');
};

export default getPosts;
