import { AxiosError } from 'axios';

import { GLOBAL_ERROR } from '../constants/errors';

const extractErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.message;
  } else {
    return GLOBAL_ERROR;
  }
};

export default extractErrorMessage;
