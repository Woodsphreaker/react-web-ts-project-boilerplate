import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import { IThemeProps } from '~/themes/index'

export default createGlobalStyle<IThemeProps>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg}
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer;
    min-height: 30px;
    min-width: 50px
  }
`
