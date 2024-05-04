import { AxiosResponse } from 'axios';

import { User } from '../../interfaces/auth';

import api from './api';

const whoami = (): Promise<AxiosResponse<User>> => api.get('/auth/whoami');

export default whoami;
