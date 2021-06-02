import { createGlobalStyle } from 'styled-components'

import { IThemeProps } from '../themes/index'

export default createGlobalStyle<IThemeProps>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    min-width: 100vw;
    min-height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg}
  }
`
