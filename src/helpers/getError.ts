import { AxiosError } from 'axios';

import { GLOBAL_ERROR } from '../constants/errors';

const getError = (error: unknown): string => {
  return error instanceof AxiosError ? error.message : GLOBAL_ERROR;
};

export default getError;
