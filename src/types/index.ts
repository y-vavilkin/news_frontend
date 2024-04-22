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

export interface PostsState {
  postsArray: Post[]
  isLoading: boolean
  error: string | null
}

export interface PostAction {
  payload?: Post[]
  type: string
  error?: string | null
}
