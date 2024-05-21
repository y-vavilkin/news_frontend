import { AddPostForm, EditProfileForm } from '../components/UserPagesForms';
import { TypeModal } from '../interfaces/modal';
import AuthForm from '../components/AuthForm';

const selectForm = (type: TypeModal | undefined) => {
  switch (type) {
    case TypeModal.REGISTRATION:
    case TypeModal.LOGIN: {
      return AuthForm;
    }
    case TypeModal.ADD_POST: {
      return AddPostForm;
    }
    case TypeModal.EDIT_PROFILE: {
      return EditProfileForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
