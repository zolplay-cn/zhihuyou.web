import { store } from '~/lib/store'

export type RootState = ReturnType<typeof store.getState>

export type ThunkDispatchResults<Payload = any, Args = any> =
  | any
  | {
      type: string
      payload: Payload | ThunkErrorResponsePayload
      meta: { arg: Args; requestId: string; requestStatus: 'pending' | 'rejected' | 'fulfilled' }
    }

export interface ThunkErrorResponsePayload extends Object {
  error: string
  statusCode: number
  message?: string
}

export type LoginThunkArgs = {
  email: string
  password: string
  remembers?: boolean
}

export type RegisterThunkArgs = {
  email: string
  password: string
  fullName?: string
  remembers?: boolean
}

export type AuthTokensDto = {
  accessToken: string
  refreshToken: string
}
