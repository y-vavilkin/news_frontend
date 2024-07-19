import { describe, expect, it } from 'vitest';

import {EditProfileForm} from '../../components/UserPagesForms';
import {AddPostForm} from '../../components/UserPagesForms';
import EditPostForm from '../../components/EditPostForm';
import CommentsList from '../../components/CommentsList';
import { TypeModal } from '../../interfaces/modal';
import AuthForm from '../../components/AuthForm';

import selectForm from '../../helpers/selectForm';

describe('selectForm function', () => {
  it('should return AuthForm for TypeModal.REGISTRATION or TypeModal.LOGIN', () => {
    expect(selectForm(TypeModal.REGISTRATION)).toBe(AuthForm);
    expect(selectForm(TypeModal.LOGIN)).toBe(AuthForm);
  });

  it('should return AddPostForm for TypeModal.ADD_POST', () => {
    expect(selectForm(TypeModal.ADD_POST)).toBe(AddPostForm);
  });

  it('should return EditProfileForm for TypeModal.EDIT_PROFILE', () => {
    expect(selectForm(TypeModal.EDIT_PROFILE)).toBe(EditProfileForm);
  });

  it('should return EditPostForm for TypeModal.EDIT_POST', () => {
    expect(selectForm(TypeModal.EDIT_POST)).toBe(EditPostForm);
  });

  it('should return CommentsList for TypeModal.COMMENTS', () => {
    expect(selectForm(TypeModal.COMMENTS)).toBe(CommentsList);
  });

  it('should return AddPostForm for an unknown TypeModal', () => {
    expect(selectForm(undefined)).toBe(AddPostForm);
  });
});
