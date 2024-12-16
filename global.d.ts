import '@mui/material/Button/Button'
import '@mui/material/TextField/TextField'

declare module '@mui/material/TextField/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true
  }
}
