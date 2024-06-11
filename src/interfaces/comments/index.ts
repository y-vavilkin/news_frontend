import { User } from '../user';

export interface Comment {
  id: number
  text: string
  userId: number
  postId: number
  createdAt: string
  updatedAt: string
  user: User
}

export interface CommentAction {
  type: string
  payload?: Comment[]
  error?: string
}

export interface CommentState {
  isLoading: boolean
  error: string | null
  comments: Comment[]
}
