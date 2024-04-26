export interface ModalAction {
  type: string
  payload: string | null
}

export interface ModalState {
  isModalOpen: boolean
  type: string | null
}
