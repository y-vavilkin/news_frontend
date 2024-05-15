import { AddPost, AddPostFormData } from '../interfaces/user';

const createRequestAddPost = (data: AddPostFormData): AddPost => {
  const image = data.image.length === 0 ? null : data.image[0];
  return { ...data, image };
};

export default createRequestAddPost;
