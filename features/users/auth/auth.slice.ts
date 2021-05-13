import { createSlice } from '@reduxjs/toolkit'

export type AuthState = {
  tokens?: {
    accessToken: string
    refreshToken: string
  }
}

export const initialState: AuthState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Logs out the current user by removing tokens.
     *
     * @param state
     */
    logout(state) {
      state.tokens = undefined
    },
  },
})

export default authSlice.reducer

export const { logout } = authSlice.actions
