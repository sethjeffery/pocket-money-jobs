'use client'

import { CssVarsProvider } from '@mui/joy'
import { PropsWithChildren } from 'react'
import theme from '../theme'

function ClientCssVarsProvider({ children }: PropsWithChildren) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
}

export default ClientCssVarsProvider
