import reducer, { initialState, logout } from './auth.slice'
import { authThunks } from './auth.thunks'

describe('AuthReducer', () => {
  describe('Thunks @auth/login', () => {
    it('should log in correctly', async () => {
      expect(
        reducer(
          initialState,
          authThunks.login.fulfilled({ accessToken: 'access', refreshToken: 'refresh' }, '', {
            email: '',
            password: '',
          })
        )
      ).toMatchObject({
        tokens: {
          accessToken: 'access',
          refreshToken: 'refresh',
        },
      })
    })
  })

  describe('Thunks @auth/register', () => {
    it('should register correctly', async () => {
      expect(
        reducer(
          initialState,
          authThunks.register.fulfilled({ accessToken: 'access', refreshToken: 'refresh' }, '', {
            email: 'email@test.com',
            fullName: 'Name',
            password: '',
          })
        )
      ).toMatchObject({
        tokens: {
          accessToken: 'access',
          refreshToken: 'refresh',
        },
      })
    })
  })

  describe('Actions @logout', () => {
    it('should log out correctly', async () => {
      expect(
        reducer(
          { ...initialState, tokens: { accessToken: 'token', refreshToken: 'another_token' } },
          logout()
        )
      ).toMatchObject({
        tokens: undefined,
      })
    })
  })
})
