import { AxiosResponse } from 'axios';

import { AuthForm, AuthResponse } from '../../interfaces/auth';

import api from './api';

export const authenticate = (body: AuthForm, url: string): Promise<AxiosResponse<AuthResponse>> => api.post(`auth/${url}`, body);
