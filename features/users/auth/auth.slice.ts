import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '~/types/redux'
import { authThunks } from '~/features/users/auth/auth.thunks'

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
  extraReducers: (builder) => {
    builder.addCase(
      authThunks.login.fulfilled,
      (state, { payload: { accessToken, refreshToken } }) => {
        state.tokens = {
          accessToken,
          refreshToken,
        }
      }
    )
    builder.addCase(
      authThunks.register.fulfilled,
      (state, { payload: { accessToken, refreshToken } }) => {
        state.tokens = {
          accessToken,
          refreshToken,
        }
      }
    )
  },
})

// --- reducer ---
export default authSlice.reducer

// --- actions ---
export const { logout } = authSlice.actions

// --- selectors ---
export const authSelectors = {
  isLoggedIn: (state: RootState): boolean => Boolean(state.user.auth.tokens?.accessToken),
}
