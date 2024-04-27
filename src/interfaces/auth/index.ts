import { Error } from '../index';

export interface User {
  id: number
  avatarUrl: string | null
  login: string
}

export interface Auth {
  email: string
  password: string
  typeModal: string | null
  login?: string
}

export interface AuthPayload {
  authData: Auth | null
  error: Error
}

export interface AuthAction {
  type: string
  payload: {
    authData: Auth | null
    error: Error
  }
}

export interface AuthState {
  isLoading: boolean
  error: Error
}

export interface AuthResponse {
  user: User
  token: string
}
