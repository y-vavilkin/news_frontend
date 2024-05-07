import { AxiosResponse } from 'axios';

import { User } from '../../interfaces/user';

import api from './api';

const getUser = (id: number): Promise<AxiosResponse<User>> => api.get<User>(`users/${id}`);

export default getUser;
