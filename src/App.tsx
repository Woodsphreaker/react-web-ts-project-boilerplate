import React from 'react'
import RootProvider from './context/index'
import ThemeProvider from './themes/ThemeProvider'
import Routes from './routes/index'

import history from './services/history'
import { Router } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <RootProvider>
        <ThemeProvider>
          <Router history={history}>
            {console.log({ history, root: 'sim' })}
            <Routes />
          </Router>
        </ThemeProvider>
      </RootProvider>
    </>
  )
}

export default App
