import { EditProfileRequest, EditProfileFormData } from '../interfaces/user';

const createRequestEditProfile = (data: EditProfileFormData): EditProfileRequest => {
  const imageUser = data.imageUser === undefined ? null : data.imageUser[0];
  return { ...data, imageUser };
};

export default createRequestEditProfile;
