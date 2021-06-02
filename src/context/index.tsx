import React, { ComponentType, createContext, ReactNode } from 'react'
import ThemeProvider from '~/context/ThemeContext'
import AuthenticationProvider from '~/context/AuthenticationContext'

interface RootProviderProps {
  children?: ReactNode
}

const providers = [AuthenticationProvider, ThemeProvider]

const RootContext = createContext({})

const combineProviders = (
  providers: Array<ComponentType>,
  children: ReactNode
) => {
  const [Provider] = providers

  if (!Provider) {
    return children
  }

  return <Provider>{combineProviders(providers.slice(1), children)}</Provider>
}

const RootProvider: React.FC<RootProviderProps> = ({
  children
}: RootProviderProps) => {
  return (
    <RootContext.Provider value={{}}>
      {combineProviders(providers, children)}
    </RootContext.Provider>
  )
}

export default RootProvider
