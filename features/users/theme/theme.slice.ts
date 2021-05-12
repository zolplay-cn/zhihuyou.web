import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeMode } from '~/types/enums'

export type UserThemeState = {
  mode?: ThemeMode
  syncsWithSystem: boolean
}

export const initialState: UserThemeState = {
  syncsWithSystem: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Toggle theme mode manually.
     *
     * @param state theme state
     * @param payload theme value
     */
    toggleThemeMode(state, { payload }: PayloadAction<ThemeMode>) {
      state.mode = payload
      state.syncsWithSystem = false
    },
    /**
     * Resets the theme mode back to system settings.
     *
     * @param state
     */
    resetThemeMode(state) {
      state.mode = undefined
      state.syncsWithSystem = true
    },
  },
})

export default themeSlice.reducer

export const { toggleThemeMode, resetThemeMode } = themeSlice.actions
