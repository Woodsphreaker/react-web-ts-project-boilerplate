import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SecuredRoute from '~/routes/SecuredRoutes'

import Home from '~/pages/Home'
import Login from '~/pages/Login'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <SecuredRoute path="/home" exact component={Home} />
    </Switch>
  )
}

export default Routes
