import { combineReducers, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import auth from '~/features/users/auth/auth.slice'
import theme from '~/features/users/theme/theme.slice'
import { User } from '~/types/entities'

const userAdapter = createEntityAdapter<User>()
const userSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extraReducers: (builder) => {
    //
  },
})

// eslint-disable-next-line no-empty-pattern
// export const {} = userSlice.actions

export const user = combineReducers({
  auth,
  theme,
  users: userSlice.reducer,
})
