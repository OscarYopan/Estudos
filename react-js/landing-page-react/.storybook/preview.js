import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.color3
      },
      {
        name: 'dark',
        value: theme.colors.color5
      }
    ]
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
