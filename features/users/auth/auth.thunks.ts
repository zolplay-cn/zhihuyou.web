import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthTokensDto, LoginThunkArgs, RegisterThunkArgs } from '~/types/redux'
import { http } from '~/lib/http'
import { makePayloadCreator } from '~/lib/redux-utils'

export const authThunks = {
  login: createAsyncThunk(
    'auth/login',
    makePayloadCreator((args: LoginThunkArgs) => http.$post<AuthTokensDto>('auth/login', args))
  ),
  register: createAsyncThunk(
    'auth/register',
    makePayloadCreator((args: RegisterThunkArgs) =>
      http.$post<AuthTokensDto>('auth/register', args)
    )
  ),
}
