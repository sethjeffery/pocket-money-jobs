'use client'

import { ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'
import theme from '../../theme'

function ClientCssVarsProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ClientCssVarsProvider
