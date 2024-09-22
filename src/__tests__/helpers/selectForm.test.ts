import { describe, expect, test } from 'vitest';

import { EditProfileForm, AddPostForm } from '../../components/UserPagesForms';

import EditPostForm from '../../components/EditPostForm';
import CommentsList from '../../components/CommentsList';
import { TypeModal } from '../../interfaces/modal';
import AuthForm from '../../components/AuthForm';
import selectForm from '../../helpers/selectForm';

describe('SELECT FORM', () => {
  test('Возврат AuthForm для TypeModal.REGISTRATION или TypeModal.LOGIN', () => {
    expect(selectForm(TypeModal.REGISTRATION)).toBe(AuthForm);
    expect(selectForm(TypeModal.LOGIN)).toBe(AuthForm);
  });

  test('Возврат AddPostForm для TypeModal.ADD_POST или undefined', () => {
    expect(selectForm(TypeModal.ADD_POST)).toBe(AddPostForm);
    expect(selectForm(undefined)).toBe(AddPostForm);
  });

  test('Возврат EditProfileForm для TypeModal.EDIT_PROFILE', () => {
    expect(selectForm(TypeModal.EDIT_PROFILE)).toBe(EditProfileForm);
  });

  test('Возврат EditPostForm для TypeModal.EDIT_POST', () => {
    expect(selectForm(TypeModal.EDIT_POST)).toBe(EditPostForm);
  });

  test('Возврат CommentsList для TypeModal.COMMENTS', () => {
    expect(selectForm(TypeModal.COMMENTS)).toBe(CommentsList);
  });
});
