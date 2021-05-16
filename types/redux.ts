import { store } from '~/lib/store'

export type RootState = ReturnType<typeof store.getState>

export type LoginThunkArgs = {
  email: string
  password: string
  remembers?: boolean
}

export type RegisterThunkArgs = {
  email: string
  password: string
  firstname?: string
  lastname?: string
  remembers?: boolean
}

export type AuthTokensDto = {
  accessToken: string
  refreshToken: string
}
