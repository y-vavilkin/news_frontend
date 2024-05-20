import { PostRequest, AddPostFormData } from '../interfaces/user';

const createRequestAddPost = (data: AddPostFormData): PostRequest => {
  const imagePost = data.imagePost === undefined ? null : data.imagePost[0];
  return { ...data, imagePost };
};

export default createRequestAddPost;
