import { AxiosResponse } from 'axios';

import { AuthUser } from '../../../../interfaces/auth';

export const mockResponse: Pick<AxiosResponse<AuthUser>, 'data'> = {
  data: {
    id: 1,
    login: 'Ryan Gosling',
    email: 'ryangosling2003@pikabu.com',
    avatarUrl: null,
    createdAt: '07.09.2024',
    updatedAt: '07.09.2024',
    role: 'admin'
  }
};

export const mockAction = { payload: { id: 1, name: 'John Doe', email: 'john@example.com' } };

export const mockError = new Error('Profile update failed');
export const mockErrorMessage = 'Error message';
