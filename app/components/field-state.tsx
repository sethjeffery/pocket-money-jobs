import { FormHelperText } from '@mui/material'
import { ControllerFieldState } from 'react-hook-form'

export default function FieldState({ error }: ControllerFieldState) {
  return error ? <FormHelperText>{error.message}</FormHelperText> : null
}
