export enum TypeModal {
  LOGIN = 'login',
  ADD_POST = 'add post',
  REGISTRATION = 'registration',
  EDIT_PROFILE = 'edit profile'
}

export interface ModalAction {
  type: string
  payload?: TypeModal
}

export interface ModalState {
  isModalOpen: boolean
  type?: TypeModal
}
