import React from 'react'
import RootProvider from './context/index'
import ThemeProvider from './themes/ThemeProvider'
import Routes from './routes/index'
import GlobalStyles from './styles/GlobalStyles'

import history from './services/history'
import { Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <RootProvider>
        <ThemeProvider>
          <GlobalStyles />
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </RootProvider>
    </>
  )
}

export default App
