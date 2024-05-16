import { LOGIN, REGISTRATION } from '../constants';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import AddPostForm from '../components/AddPostForm';

const selectForm = (type: string) => {
  switch (type) {
    case REGISTRATION: {
      return SignUpForm;
    }
    case LOGIN: {
      return SignInForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
