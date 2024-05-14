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

export interface UserAction {
  type: string
  payload?: User | number
  error?: string | null
}

export interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
}
