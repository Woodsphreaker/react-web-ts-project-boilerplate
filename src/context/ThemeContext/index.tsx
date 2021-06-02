import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState
} from 'react'
import { dark, light } from '~/themes'

interface IThemeProps {
  children?: ReactNode
}

interface IThemeOptions {
  themeName: 'dark' | 'light'
}

interface IThemeProviderProps {
  theme: {
    colors: {}
  }
  choseTheme: ({ themeName }: IThemeOptions) => void
}

const ThemeContext = createContext({} as IThemeProviderProps)

const ThemeProvider = ({ children }: IThemeProps): ReactElement => {
  const [theme, setTheme] = useState(dark)

  const choseTheme = ({ themeName }: IThemeOptions): void => {
    const themes = {
      dark,
      light,
      default: dark
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
