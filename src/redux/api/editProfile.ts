import { AxiosResponse } from 'axios';

import { EditProfileRequest } from '../../interfaces/user';
import { AuthUser } from '../../interfaces/auth';

import api from './api';

const editProfile = (body: EditProfileRequest): Promise<AxiosResponse<AuthUser>> =>
  api.patchForm<AuthUser>('users', body);

export default editProfile;
