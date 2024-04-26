import { AxiosResponse } from 'axios';

import { Auth, AuthResponse } from '../../interfaces/auth';

import api from './api';

const registartion = (body: Auth): Promise<AxiosResponse<AuthResponse>> => api.post('auth/registration', body);

export default registartion;
