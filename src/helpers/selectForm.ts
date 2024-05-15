import { AUTH_USER_LOGIN, AUTH_USER_REGISTRATION } from '../constants';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import AddPostForm from '../components/AddPostForm';

const selectForm = (type: string) => {
  switch (type) {
    case AUTH_USER_REGISTRATION: {
      return SignUpForm;
    }
    case AUTH_USER_LOGIN: {
      return SignInForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
