import React from 'react'

import { Text } from './styles'

import { useTheme } from '../../context/ThemeContext'

const Login: React.FC = () => {
  const { choseTheme } = useTheme()

  return (
    <div>
      <h1>
        <Text>Login</Text>
      </h1>

      <button onClick={() => choseTheme({ themeName: 'dark' })} type="button">
        Dark
      </button>
      <button onClick={() => choseTheme({ themeName: 'light' })} type="button">
        Light
      </button>
    </div>
  )
}

export default Login
