import { Post } from '../posts';

export interface AddPostForm {
  title: string
  content: string
  tags: string
  image: FileList
}

export interface AddPost {
  title: string
  content: string
  tags: string
  image: File | null
}

export interface AddPostAction {
  type: string
  error?: string
  payload?: Post | AddPost
}

export interface AddPostState {
  isLoading: boolean
  error: string | null
}
