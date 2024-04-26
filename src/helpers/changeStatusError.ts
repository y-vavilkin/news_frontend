import { USER_EXIST, USER_NOT_AUTHORIZATE, USER_NOT_CREATE, INCORRECT_DATA, ERROR_404, GLOBAL_ERROR } from '../constants';

const changeStatusError = (error: string): string => {
  switch (error) {
    case USER_EXIST: {
      return 'User exist';
    }
    case USER_NOT_CREATE: {
      return 'Failed to create a user';
    }
    case USER_NOT_AUTHORIZATE: {
      return 'Complete the authorization';
    }
    case INCORRECT_DATA: {
      return 'Incorrect data';
    }
    case ERROR_404: {
      return 'Page not found';
    }
    default:
      return GLOBAL_ERROR;
  }
};

export default changeStatusError;
