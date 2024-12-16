import { Box, Button, ButtonProps, CircularProgress } from '@mui/material'

export type LoadingButtonProps = ButtonProps & {
  isLoading: boolean
}

const LoadingButton = ({
  isLoading: loading,
  children,
  ...props
}: LoadingButtonProps) => (
  <Button {...props} sx={{ position: 'relative' }}>
    <Box sx={{ transition: 'opacity 0.3s', opacity: loading ? '0%' : '100%' }}>
      {children}
    </Box>
    {loading ? (
      <CircularProgress
        size={20}
        sx={{
          color: 'currentColor',
          position: 'absolute',
          left: '50%',
          top: '50%',
          margin: '-10px 0 0 -10px',
        }}
      />
    ) : null}
  </Button>
)

export default LoadingButton
