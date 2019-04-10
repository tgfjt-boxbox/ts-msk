import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: {
    large: 8,
    medium: 4,
    small: 2,
  },

  colors: {
    primary: {
      main: '#01a99a',
      contrast: '#eef0bf',
    },
    secondary: {
      main: '#010028',
      contrast: '#eef0bf',
    },
    error: {
      main: '#ee1b24',
      contrast: '#eef0bf',
    },
  },

  font: {
    family: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    size: {
      pc: {
        xLarge: 192,
        large: 96,
        medium: 32,
        small: 16,
      },
      sp: {
        large: 48,
        medium: 32,
        small: 16,
      },
    },
  },

  padding: {
    large: 32,
    medium: 24,
    small: 16,
  },
}

export default theme
