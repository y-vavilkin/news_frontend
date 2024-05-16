import { PostRequest, AddPostFormData } from '../interfaces/user';

const createRequestAddPost = (data: AddPostFormData): PostRequest => {
  const image = data.image.length === 0 ? null : data.image[0];
  return { ...data, image };
};

export default createRequestAddPost;
