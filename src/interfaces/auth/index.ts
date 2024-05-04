import { Post } from '../posts';

export interface User {
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
  user: User
  token: string
}

export interface AuthAction {
  type: string
  payload?: AuthForm | User
  error?: string | null
}

export interface AuthState {
  user: User | null
  isOnline: boolean
  isLoading: boolean
  error: string | null
}
