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
  userPosts: Post[]
  isLoadingPosts: boolean
  isLoadingProfile: boolean
  error: string | null
}

export interface AddPostFormData {
  title: string
  content: string
  tags: string
  imagePost?: FileList
}

export interface PostRequest {
  title: string
  content: string
  tags: string
  imagePost: File | null
}
