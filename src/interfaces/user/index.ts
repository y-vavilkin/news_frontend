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
  role: string
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
  isLoadingPost: boolean
  isLoading: boolean
  error: string | null
  postId: number
}

export interface PostFormData {
  title: string
  content: string
  tags: string
  imagePost?: FileList | File | null
}

export interface PostRequest {
  title: string
  content: string
  tags: string
  imagePost?: File
}

export interface EditProfileFormData {
  login: string
  imageUser?: FileList | File | null
}

export interface EditProfileRequest {
  login: string
  imageUser?: File
}
