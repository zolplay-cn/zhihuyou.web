import { schema } from 'normalizr'

export const userEntityKey = Symbol('users')
export const userEntity = new schema.Entity(userEntityKey, {})

export const authObject = new schema.Object({
  user: userEntity,
})
