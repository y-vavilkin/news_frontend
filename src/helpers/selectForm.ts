import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import AddPostForm from '../components/AddPostForm';
import { TypeModal } from '../interfaces/modal';

const selectForm = (type: TypeModal | undefined) => {
  switch (type) {
    case TypeModal.REGISTRATION: {
      return SignUpForm;
    }
    case TypeModal.LOGIN: {
      return SignInForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
