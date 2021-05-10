import { combineReducers } from '@reduxjs/toolkit'
import theme from '~/features/users/theme.slice'

export const user = combineReducers({
  theme,
})
