import { ButtonProps, CSSObject, IconButton, styled } from '@mui/material'

const StyledIconButton = styled(IconButton)<{
  variant?: Exclude<ButtonProps['variant'], 'text'> | 'default'
}>(({ theme, variant, color }) => {
  const overrides: CSSObject = {}

  const colorAsVariant =
    color === undefined || color === 'inherit' || color === 'default'
      ? 'primary'
      : color

  if (variant === 'contained') {
    overrides.backgroundColor = theme.palette[colorAsVariant].main
    overrides.color = theme.palette[colorAsVariant].contrastText
    overrides[':hover'] = {
      backgroundColor: theme.palette[colorAsVariant].dark,
    }
  }

  if (variant === 'outlined') {
    overrides.border = `1px solid ${theme.palette[colorAsVariant].main}`
    overrides.color = theme.palette[colorAsVariant].main
  }

  return {
    ...overrides,
  }
})

export default StyledIconButton
