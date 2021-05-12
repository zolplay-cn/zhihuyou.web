import { schema } from 'normalizr'

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

export const userEntityKey = Symbol('users')
export const userEntity = new schema.Entity(userEntityKey, {})
