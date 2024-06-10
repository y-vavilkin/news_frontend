import { AddPostForm, EditProfileForm } from '../components/UserPagesForms';
import EditPostForm from '../components/EditPostForm';
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
    case TypeModal.EDIT_POST: {
      return EditPostForm;
    }
    default:
      return AddPostForm;
  }
};

export default selectForm;
