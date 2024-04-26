import { AxiosResponse } from 'axios';

import { User } from '../../interfaces/auth';

import api from './api';

const status = (token: string): Promise<AxiosResponse<User>> => api.get('/auth/whoami', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default status;
