import '@fontsource/inter'
import CssBaseline from '@mui/joy/CssBaseline'
import type { Metadata } from 'next'
import ClientCssVarsProvider from './client-css-vars-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientCssVarsProvider>
          <CssBaseline />
          {children}
        </ClientCssVarsProvider>
      </body>
    </html>
  )
}
