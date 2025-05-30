import {
  POST_NOT_HAS_BEEN_DELETED,
  GLOBAL_ERROR,
  USER_EXIST,
  INCORRECT_DATA,
  USER_NOT_EXIST,
  ERROR_400,
  ERROR_401,
  ERROR_404,
  BAD_URL
} from '../constants/errors';

const changeError = (error: string) => {
  switch (error) {
    case GLOBAL_ERROR: {
      return 'Sorry, something went wrong.';
    }
    case BAD_URL: {
      return 'Sorry, url is bad';
    }
    case USER_EXIST: {
      return 'Sorry, user exist';
    }
    case USER_NOT_EXIST: {
      return 'Sorry, user not exist';
    }
    case INCORRECT_DATA: {
      return 'Sorry, incorrect data';
    }
    case POST_NOT_HAS_BEEN_DELETED: {
      return 'Sorry, post not has been deleted';
    }
    case ERROR_401: {
      return 'Sorry, you are unauthorized';
    }
    case ERROR_404: {
      return 'Sorry, page not found.';
    }
    case ERROR_400: {
      return 'Sorry, bad request';
    }
    default: {
      return GLOBAL_ERROR;
    }
  }
};

export default changeError;
