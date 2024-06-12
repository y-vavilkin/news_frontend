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
  payload?: Comment[] | Comment | CommentData | string | number
  error?: string
}

export interface CommentState {
  isLoading: boolean
  isLoadingDelete: boolean
  error: string | null
  comments: Comment[]
  inputText: string
  commentId: number
}

export interface CommentData {
  text: string
}
