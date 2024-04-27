import { User } from '../auth';
import { Error } from '../index';

type ArrayOfPosts = Post[] | [];

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
