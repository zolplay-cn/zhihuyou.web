/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginThunkArgs, RegisterThunkArgs } from '~/types/redux'
import { http } from '~/lib/http'

export default class AuthThunks {
  static login = createAsyncThunk(
    'auth/login',
    async (args: LoginThunkArgs, { rejectWithValue }) => {
      try {
        const result = await http.$post('auth/login', args)
        console.info(result)
      } catch (e) {
        rejectWithValue(e)
      }
    }
  )

  static register = createAsyncThunk('auth/register', async (arg: RegisterThunkArgs, thunkAPI) => {
    //
  })
}
