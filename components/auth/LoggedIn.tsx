import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from '~/features/users/auth/auth.slice'

const LoggedIn: FC = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn)

  if (!isLoggedIn) {
    return null
  }

  return <>{children}</>
}

export default LoggedIn
