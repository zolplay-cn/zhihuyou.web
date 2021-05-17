import { UserRole } from '~/types/enums'

// --- User ---
export interface UserDto {
  id: string
  email: string
  firstname?: string
  lastname?: string
  role: UserRole
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface User extends UserDto {}
// --- User ---
