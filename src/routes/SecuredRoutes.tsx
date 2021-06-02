import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { useAuthentication } from '~/context/AuthenticationContext'

interface IPrivateRouteProps {
  component: React.ComponentType<RouteProps>
  path: string
  exact?: boolean
}

const SecuredRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  ...routeProps
}: IPrivateRouteProps) => {
  const { isAuthenticated } = useAuthentication()

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return <Route {...routeProps} render={props => <Component {...props} />} />
}

export default SecuredRoute
