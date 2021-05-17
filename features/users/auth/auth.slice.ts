import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '~/types/redux'
import { authThunks } from '~/features/users/auth/auth.thunks'

export type AuthState = {
  submitting: boolean
  tokens?: {
    accessToken: string
    refreshToken: string
  }
}

export const initialState: AuthState = { submitting: false }

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
        state.submitting = false
        state.tokens = {
          accessToken,
          refreshToken,
        }
      }
    )
    builder.addCase(
      authThunks.register.fulfilled,
      (state, { payload: { accessToken, refreshToken } }) => {
        state.submitting = false
        state.tokens = {
          accessToken,
          refreshToken,
        }
      }
    )

    builder.addMatcher(
      (action) =>
        [authThunks.login.pending.type, authThunks.register.pending.type].includes(action.type),
      (state) => {
        state.submitting = true
      }
    )
    builder.addMatcher(
      (action) =>
        [authThunks.login.rejected.type, authThunks.register.rejected.type].includes(action.type),
      (state) => {
        state.submitting = false
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
