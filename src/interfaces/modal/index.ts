export interface ModalAction {
  type: string
  payload?: string
}

export interface ModalState {
  isModalOpen: boolean
  type: string | null
}
