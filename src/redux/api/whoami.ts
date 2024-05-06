import { AxiosResponse } from 'axios';

import { AuthUser } from '../../interfaces/auth';

import api from './api';

const whoami = (): Promise<AxiosResponse<AuthUser>> => api.get('/auth/whoami');

export default whoami;
