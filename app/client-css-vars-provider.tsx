'use client'

import { CssVarsProvider } from '@mui/joy'
import theme from '../theme'
import { PropsWithChildren } from 'react'

function ClientCssVarsProvider({ children }: PropsWithChildren) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
}

export default ClientCssVarsProvider
