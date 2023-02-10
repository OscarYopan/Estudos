import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Children } from 'react'
import { theme } from '../../styles/themes'

export const renderTheme = children => {
  return render(<ThemeProvider theme={theme}>{Children}</ThemeProvider>)
}
