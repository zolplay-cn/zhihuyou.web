import { combineReducers } from '@reduxjs/toolkit'
import auth from '~/features/users/auth/auth.slice'
import theme from '~/features/users/theme/theme.slice'

export const user = combineReducers({
  auth,
  theme,
})
