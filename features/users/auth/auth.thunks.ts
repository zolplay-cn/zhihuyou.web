import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthTokensDto, LoginThunkArgs, RegisterThunkArgs } from '~/types/redux'
import { http } from '~/lib/http'

export const authThunks = {
  login: createAsyncThunk<AuthTokensDto, LoginThunkArgs>('auth/login', async (args) => {
    const result = await http.$post<AuthTokensDto>('auth/login', args)
    console.info(result)
    return result
  }),
  register: createAsyncThunk<AuthTokensDto, RegisterThunkArgs>('auth/register', async (args) => {
    const result = await http.$post<AuthTokensDto>('auth/register', args)
    console.info(result)
    return result
  }),
}
