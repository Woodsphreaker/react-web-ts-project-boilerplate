import React, {
  createContext,
  ReactElement,
  ReactNode,
  useState,
  useContext,
  useEffect
} from 'react'

import history from '~/services/history'

interface IAuthenticationProps {
  children?: ReactNode
}

interface IAuthenticationProvider {
  isAuthenticated: boolean
  signIn: ({ user, pass }: IUserCredential) => void
  logout: () => void
}

interface IUserCredential {
  user: string
  pass: string
}

const USER_CREDENTIALS = {
  login: 'woods',
  pass: '125'
}

const AuthenticationContext = createContext({} as IAuthenticationProvider)

const AuthenticationProvider = ({
  children
}: IAuthenticationProps): ReactElement => {
  const [isAuthenticated, setAuthentication] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      history.push('/home')
    }, 2000)
  }, [isAuthenticated])

  const signIn = ({ user, pass }: IUserCredential): void => {
    if (user === USER_CREDENTIALS.login && pass === USER_CREDENTIALS.pass) {
      setAuthentication(true)

      history.push('/home')
    }
  }

  const logout = (): void => {
    setAuthentication(false)
  }

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, signIn, logout }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = (): IAuthenticationProvider => {
  return useContext(AuthenticationContext)
}

export default AuthenticationProvider
