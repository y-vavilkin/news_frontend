import { AuthUser } from '../auth';
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
  payload?: User | number | Post | PostRequest | EditProfileRequest | AuthUser
  error?: string | null
}

export interface UserState {
  user: User | null
  userPosts: Post[]
  isLoadingModal: boolean
  isLoading: boolean
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

export interface EditProfileFormData {
  login: string
  imageUser?: FileList
}

export interface EditProfileRequest {
  login: string
  imageUser: File | null
}
