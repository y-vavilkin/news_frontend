import { AxiosResponse } from 'axios';

import { Auth, AuthResponse } from '../../types';

import api from './api';

const authorization = (body: Auth): Promise<AxiosResponse<AuthResponse>> => api.post('auth/login', body);

export default authorization;
