import * as actionTypes from '../redux/actions/actionTypes/auth';
import { ADD_POST } from '../constants';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import AddPostForm from '../components/AddPostForm';

const selectForm = (type: string | null) => {
  switch (type) {
    case actionTypes.AUTH_USER_REGISTRATION: {
      return SignUpForm;
    }
    case actionTypes.AUTH_USER_LOGIN: {
      return SignInForm;
    }
    case ADD_POST: {
      return AddPostForm;
    }
    default:
      return null;
  }
};

export default selectForm;
