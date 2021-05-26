import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react'
import { darkTheme, lightTheme } from '../../themes/index'

interface ThemeProps {
  children?: ReactNode
}

interface ThemeOptions {
  themeName: 'dark' | 'light'
}

interface ThemeProviderProps {
  theme: {
    backgroundColor: string
  }
  choseTheme: ({ themeName }: ThemeOptions) => void
}

const ThemeContext = createContext({} as ThemeProviderProps)

const ThemeProvider = ({ children }: ThemeProps): ReactElement => {
  console.log(children)
  const [theme, setTheme] = useState(darkTheme)

  const choseTheme = ({ themeName }: ThemeOptions): void => {
    const themes = {
      dark: darkTheme,
      light: lightTheme,
      default: darkTheme
    }

    const selectedTheme = themes[themeName] || themes.default

    setTheme(selectedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, choseTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeProviderProps => useContext(ThemeContext)

export default ThemeProvider
