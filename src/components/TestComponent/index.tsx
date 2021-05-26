import React, { ReactNode } from 'react'

import { Container } from './styles'

import { useTheme } from '../../context/ThemeContext'

interface Props {
  children: ReactNode
}

const TestComponent: React.FC<Props> = ({ children }: Props) => {
  const { choseTheme } = useTheme()
  return (
    <Container>
      {children}
      <button type="button" onClick={() => choseTheme({ themeName: 'dark' })}>
        Dark
      </button>
      <button type="button" onClick={() => choseTheme({ themeName: 'light' })}>
        Light
      </button>
    </Container>
  )
}

export default TestComponent
