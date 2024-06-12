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
  isLoadingModal: boolean
  isLoadingComment: boolean
  error: string | null
  comments: Comment[]
  inputTextForCreate: string
  inputTextForEdit: string
  editInput: boolean
  commentId: number
}

export interface CommentData {
  text: string
}
