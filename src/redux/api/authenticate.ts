import { AxiosResponse } from 'axios';

import { AuthFormData, AuthResponse } from '../../interfaces/auth';

import api from './api';

export const authenticate = (
  body: AuthFormData,
  url: string
): Promise<AxiosResponse<AuthResponse>> => {
  return api.post(`auth/${url}`, body);
};
