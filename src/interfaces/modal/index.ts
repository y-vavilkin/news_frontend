export enum TypeModal {
  LOGIN = 'login',
  ADD_POST = 'add post',
  EDIT_POST = 'edit post',
  REGISTRATION = 'registration',
  EDIT_PROFILE = 'edit profile',
  COMMENTS = 'comments'
}

export interface ModalAction {
  type: string
  payload?: TypeModal
}

export interface ModalState {
  isModalOpen: boolean
  type?: TypeModal
}
