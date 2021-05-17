import reducer, { initialState, logout } from './auth.slice'
import { authThunks } from './auth.thunks'
import * as faker from 'faker'

describe('AuthReducer', () => {
  describe('Thunks @auth/login', () => {
    it('should set submitting on pending/rejected', async () => {
      expect(
        reducer(
          initialState,
          authThunks.login.pending('', {
            email: faker.internet.email(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        submitting: true,
      })

      expect(
        reducer(
          { ...initialState, submitting: true },
          authThunks.login.rejected(null, '', {
            email: faker.internet.email(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        submitting: false,
      })
    })

    it('should log in correctly', async () => {
      const tokens = {
        accessToken: faker.datatype.string(),
        refreshToken: faker.datatype.string(),
      }

      expect(
        reducer(
          initialState,
          authThunks.login.fulfilled(tokens, '', {
            email: faker.internet.email(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        tokens,
        submitting: false,
      })
    })
  })

  describe('Thunks @auth/register', () => {
    it('should set submitting on pending/rejected', async () => {
      expect(
        reducer(
          initialState,
          authThunks.register.pending('', {
            email: faker.internet.email(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        submitting: true,
      })

      expect(
        reducer(
          { ...initialState, submitting: true },
          authThunks.register.rejected(null, '', {
            email: faker.internet.email(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        submitting: false,
      })
    })

    it('should register correctly', async () => {
      const tokens = {
        accessToken: faker.datatype.string(),
        refreshToken: faker.datatype.string(),
      }

      expect(
        reducer(
          initialState,
          authThunks.register.fulfilled(tokens, '', {
            email: faker.internet.email(),
            fullName: faker.name.findName(),
            password: faker.internet.password(),
          })
        )
      ).toMatchObject({
        tokens,
      })
    })
  })

  describe('Actions @logout', () => {
    it('should log out correctly', async () => {
      expect(
        reducer(
          {
            ...initialState,
            tokens: { accessToken: faker.datatype.string(), refreshToken: faker.datatype.string() },
          },
          logout()
        )
      ).toMatchObject({
        tokens: undefined,
      })
    })
  })
})
