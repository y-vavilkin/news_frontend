import { User } from '../auth';

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

export interface PostAction {
  type: string
  payload?: Post[]
  error?: string
}

export interface PostsState {
  posts: Post[]
  isLoading: boolean
  error: string | null
}
