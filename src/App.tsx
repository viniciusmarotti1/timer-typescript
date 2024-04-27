import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CyclesContextProviders } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProviders>
          <Router />
        </CyclesContextProviders>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
