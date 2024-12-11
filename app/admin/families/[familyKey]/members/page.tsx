import { getAllMembers } from '@/app/store/members'
import {
  Box,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from '@mui/material'
import NewMemberButton from './components/new-member-button'

export default async function MembersPage({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const members = await getAllMembers(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Members
      </Typography>
      <Grid container spacing={2}>
        {members.map((member) => (
          <Grid key={member.key} size={6}>
            <Card>
              <CardContent>
                <Typography>{member.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box marginTop={2}>
        <NewMemberButton familyKey={familyKey} />
      </Box>
    </>
  )
}
