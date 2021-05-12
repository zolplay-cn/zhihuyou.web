export interface UserDto {
  id: string
  email: string
  firstname?: string
  lastname?: string
  role: 'USER' | 'ADMIN'
}

export interface User {
  id: string
  email: string
  firstname?: string
  lastname?: string
  role: 'USER' | 'ADMIN'
}
