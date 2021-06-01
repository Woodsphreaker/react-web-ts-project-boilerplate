import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react'
import { darkTheme, lightTheme } from '../../themes/index'

interface IThemeProps {
  children?: ReactNode
}

interface IThemeOptions {
  themeName: 'dark' | 'light'
}

interface IThemeProviderProps {
  theme: {
    backgroundColor: string
  }
  choseTheme: ({ themeName }: IThemeOptions) => void
}

const ThemeContext = createContext({} as IThemeProviderProps)

const ThemeProvider = ({ children }: IThemeProps): ReactElement => {
  const [theme, setTheme] = useState(darkTheme)

  const choseTheme = ({ themeName }: IThemeOptions): void => {
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

export const useTheme = (): IThemeProviderProps => useContext(ThemeContext)

export default ThemeProvider
