import AddPostForm from '../components/ProfileForm';
import { TypeModal } from '../interfaces/modal';
import AuthForm from '../components/AuthForm';

const selectForm = (type: TypeModal | undefined) => {
  switch (type) {
    case TypeModal.REGISTRATION:
    case TypeModal.LOGIN: {
      return AuthForm;
    }
    case TypeModal.ADD_POST:
    case TypeModal.EDIT_PROFILE: {
      return AddPostForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
