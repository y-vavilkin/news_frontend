export interface TagData {
  id: number
  text: string
}

export interface UserData {
  id: number
  avatarUrl: string | null
  login: string
}

export interface PostData {
  id: number
  title: string
  content: string
  userId: number
  imageUrl: string | null
  createdAt: string
  user: UserData
  tags: TagData[]
}
