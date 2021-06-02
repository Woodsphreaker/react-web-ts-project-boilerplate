import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '~/context/ThemeContext'

interface ThemeProps {
  children: ReactNode
}

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  const { theme } = useTheme()

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default Theme
