import toPoundsPence from '@/app/helpers/to-pounds-pence'
import { InputAdornment, OutlinedTextFieldProps, TextField, TextFieldProps } from '@mui/material'
import { useState } from 'react'
import { ControllerProps } from 'react-hook-form'

const convertValueToPence = (value: string, smallCurrencySign = 'p') => {
  if (value.endsWith(smallCurrencySign)) {
    return parseInt(value.slice(0, -1))
  }
  return Math.round(parseFloat(value) * 100)
}

interface PoundsPenceFieldProps extends OutlinedTextFieldProps {
  largeCurrencySign?: string
  smallCurrencySign?: string
  onChange: ControllerProps<TextFieldProps>['onChange']
}

export default function PoundsPenceField({
  largeCurrencySign = '£',
  smallCurrencySign = 'p',
  ref,
  ...props
}: PoundsPenceFieldProps) {
  const [value, setValue] = useState(
    toPoundsPence(props.value, largeCurrencySign, smallCurrencySign).replace(
      largeCurrencySign,
      ''
    )
  )

  return (
    <TextField
      {...props}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
        input: {
          ref,
          startAdornment: value.endsWith(smallCurrencySign) ? null : (
            <InputAdornment position="start">
              {largeCurrencySign}
            </InputAdornment>
          ),
        },
      }}
      onChange={(event) => {
        setValue(event.target.value)
        props.onChange?.(
          convertValueToPence(event.target.value, smallCurrencySign)
        )
      }}
      value={value}
    />
  )
}
