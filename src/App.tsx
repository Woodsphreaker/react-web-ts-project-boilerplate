import React from 'react'
import RootProvider from './context/index'
import ThemeProvider from './themes/ThemeProvider'
import TestComponent from './components/TestComponent'

const App: React.FC = () => {
  return (
    <>
      <RootProvider>
        <ThemeProvider>
          <TestComponent>
            <h1>running</h1>
          </TestComponent>
        </ThemeProvider>
      </RootProvider>
    </>
  )
}

export default App
