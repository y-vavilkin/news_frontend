import { AddPostForm } from '../interfaces/addPost';

const createRequestAddPost = (data: AddPostForm) => {
  if (data.image.length === 0) {
    return { ...data, image: null };
  } else {
    return { ...data, image: data.image[0] };
  }
};

export default createRequestAddPost;
