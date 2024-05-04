import { User } from '../auth';

export interface UserAction {
  type: string
  payload?: User | number
  error?: string | null
}

export interface UserState {
  id: number | null
  user: User | null
  isLoading: boolean
  error: string | null
}
