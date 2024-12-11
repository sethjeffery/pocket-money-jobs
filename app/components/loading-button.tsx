import { Button, ButtonProps, CircularProgress } from '@mui/material'

export type LoadingButtonProps = ButtonProps & {
  isLoading: boolean
}

const LoadingButton = ({
  isLoading: loading,
  children,
  ...props
}: LoadingButtonProps) => (
  <Button {...props}>{loading ? <CircularProgress /> : children}</Button>
)

export default LoadingButton
