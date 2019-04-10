import * as styledComponents from 'styled-components'
import theme from './theme'

console.log('theme:', theme)

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<styledComponents.DefaultTheme>

export { styled, css, keyframes, ThemeProvider }
export { theme }
