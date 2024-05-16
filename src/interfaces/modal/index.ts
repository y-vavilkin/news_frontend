export enum TypeModal {
  LOGIN = 'LOGIN',
  ADD_POST = 'ADD_POST',
  REGISTRATION = 'REGISTRATION'
}

export interface ModalAction {
  type: string
  payload?: string
}

export interface ModalState {
  isModalOpen: boolean
  type: TypeModal
}
