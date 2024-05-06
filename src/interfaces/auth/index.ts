import { Post } from '../posts';

export interface AuthUser {
  id: number
  login: string
  email: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  posts: Post[]
}

export interface AuthForm {
  login?: string
  email: string
  password: string
}

export interface AuthResponse {
  user: AuthUser
  token: string
}

export interface AuthAction {
  type: string
  payload?: AuthForm | AuthUser
  error?: string | null
}

export interface AuthState {
  authUser: AuthUser | null
  isOnline: boolean
  isLoading: boolean
  error: string | null
}
