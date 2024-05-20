export enum TypeModal {
  LOGIN = 'login',
  ADD_POST = 'add_post',
  REGISTRATION = 'registration',
  EDIT_PROFILE = 'edit_profile'
}

export interface ModalAction {
  type: string
  payload?: TypeModal
}

export interface ModalState {
  isModalOpen: boolean
  type?: TypeModal
}
