import AddPostForm from '../components/AddPostForm';
import { TypeModal } from '../interfaces/modal';
import AuthForm from '../components/AuthForm';

const selectForm = (type: TypeModal | undefined) => {
  switch (type) {
    case TypeModal.REGISTRATION:
    case TypeModal.LOGIN: {
      return AuthForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
