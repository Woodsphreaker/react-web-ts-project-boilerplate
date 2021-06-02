import React from 'react'
import RootProvider from './context/index'
import { ToastContainer } from 'react-toastify'
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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </RootProvider>
    </>
  )
}

export default App
