import { CircularProgress, Stack } from '@mui/material'

export default function Loading() {
  return (
    <Stack alignItems="center" height="100%" justifyContent="center">
      <CircularProgress />
    </Stack>
  )
}
