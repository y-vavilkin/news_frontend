import { ADD_POST, EDIT_PROFILE } from '../constants';
import {
  PostRequest,
  AddPostFormData,
  EditProfileRequest,
  EditProfileFormData
} from '../interfaces/user';

type FormData = EditProfileFormData | AddPostFormData;
type Request = EditProfileRequest | PostRequest;

const isEditProfileFormData = (data: FormData): data is EditProfileFormData => {
  return (data as EditProfileFormData).imageUser !== undefined;
};

const isAddPostFormData = (data: FormData): data is AddPostFormData => {
  return (data as AddPostFormData).imagePost !== undefined;
};

const createRequest = (
  data: EditProfileFormData | AddPostFormData,
  type: string
): Request | never => {
  switch (type) {
    case EDIT_PROFILE: {
      if (isEditProfileFormData(data)) {
        const imageUser = data.imageUser === undefined
          ? null
          : data.imageUser[0];
        return { ...data, imageUser } as EditProfileRequest;
      } else {
        throw new Error('Invalid data type for EDIT_PROFILE');
      }
    }
    case ADD_POST: {
      if (isAddPostFormData(data)) {
        const imagePost = data.imagePost === undefined
          ? null
          : data.imagePost[0];
        return { ...data, imagePost } as PostRequest;
      } else {
        throw new Error('Invalid data type for ADD_POST');
      }
    }
    default: {
      throw new Error('Invalid request type');
    }
  }
};

export default createRequest;
