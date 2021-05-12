import { store } from '~/lib/store'

export type RootState = ReturnType<typeof store.getState>

export interface LoginThunkArgs {
  email: string
  password: string
}

export interface RegisterThunkArgs {
  email: string
  password: string
  firstname?: string
  lastname?: string
}
