/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginThunkArgs, RegisterThunkArgs } from '~/types/redux'

export default class AuthThunks {
  static login = createAsyncThunk('auth/login', async (arg: LoginThunkArgs, thunkAPI) => {
    //
  })

  static register = createAsyncThunk('auth/register', async (arg: RegisterThunkArgs, thunkAPI) => {
    //
  })
}
