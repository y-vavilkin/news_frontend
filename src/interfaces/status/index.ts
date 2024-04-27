export interface UpdateAction {
  type: string
  payload?: boolean
}

export interface UpdateState {
  userOnline: boolean
}

export interface UserStatusAction {
  type: string
}
