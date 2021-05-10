import { configureStore } from '@reduxjs/toolkit'
import { user } from '~/features/users'

export const store = configureStore({
  reducer: {
    user,
  },
})
