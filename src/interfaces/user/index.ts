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
  payload?: User | number | Post | PostRequest
  error?: string | null
}

export interface UserState {
  user: User | null
  isLoading: boolean
  error: string | null
}

export interface AddPostFormData {
  title: string
  content: string
  tags: string
  image: FileList
}

export interface PostRequest {
  title: string
  content: string
  tags: string
  image: File | null
}
