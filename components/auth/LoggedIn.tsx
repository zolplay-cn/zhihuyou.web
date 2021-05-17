import { FC } from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from '~/features/users/auth/auth.slice'

const LoggedIn: FC<{ or?: JSX.Element | JSX.Element[] }> = ({ children, or }) => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn)

  if (!isLoggedIn) {
    return or ? <>{or}</> : null
  }

  return <>{children}</>
}

export default LoggedIn
