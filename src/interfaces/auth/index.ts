export interface AuthUser {
  id: number
  login: string
  email: string
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
}

export interface AuthFormData {
  login?: string
  email: string
  password: string
}

export interface AuthResponse {
  user: AuthUser
  token: string
}

export interface AuthAction {
  type: string
  payload?: AuthFormData | AuthUser
  error?: string | null
}

export interface AuthState {
  authUser: AuthUser | null
  isOnline: boolean
  isLoading: boolean
  error: string | null
}
