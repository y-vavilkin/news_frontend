export interface User {
  id: number
  avatarUrl: string | null
  login: string
}

export interface Tag {
  id: number
  text: string
}

export interface Post {
  key: number
  id: number
  title: string
  content: string
  userId: number
  imageUrl: string | null
  createdAt: string
  user: User
  tags: Tag[]
}

type Error = string | null;
type ArrayOfPosts = Post[] | [];

export interface PostPayload {
  posts?: ArrayOfPosts
  error: Error
}

export interface PostAction {
  type: string
  payload: PostPayload
}

export interface PostsState {
  postsArray: ArrayOfPosts
  isLoading: boolean
  error: Error
}

export interface ModalAction {
  type: string
  payload: string | null
}

export interface ModalState {
  isModalOpen: boolean
  type: string | null
}

export interface Auth {
  email: string
  password: string
  typeModal: string
  login?: string
  error?: string | null
}

export interface AuthState {
  isOnline: boolean
  isLoading: boolean
  error?: string | null
}

export interface AuthAction {
  type: string
  payload?: Auth
  loading?: boolean
  modalType?: string
  error?: string | null
}

export interface AuthResponse {
  user: User
  token: string
}
