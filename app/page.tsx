import { Button, Grid2 as Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { getAllMembers } from './store/members'

export default async function Home() {
  const members = await getAllMembers('')

  return (
    <Stack
      alignItems="center"
      gap={2}
      justifyContent="center"
      minHeight="100vh"
      padding={2}
    >
      <Typography variant="h1">Who are you?</Typography>
      <Grid container gap={2}>
        {members.map((member) => (
          <Link href={`/user/${member.key}`} key={member.key}>
            <Button>{member.name}</Button>
          </Link>
        ))}
      </Grid>
    </Stack>
  )
}
