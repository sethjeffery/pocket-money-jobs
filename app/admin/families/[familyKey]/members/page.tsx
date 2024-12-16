import toPoundsPence from '@/app/helpers/to-pounds-pence'
import { getAllJobs } from '@/app/store/jobs'
import { getAllMemberRewards } from '@/app/store/member-rewards'
import { getAllMembers } from '@/app/store/members'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material'
import CardJobs from './components/card-jobs'
import CardRewards from './components/card-rewards'
import CardTitle from './components/card-title'
import MemberActions from './components/member-actions'
import NewMemberButton from './components/new-member-button'

export default async function MembersPage({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const members = await getAllMembers(familyKey)
  const memberRewards = await getAllMemberRewards(familyKey)
  const jobs = await getAllJobs(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Members
      </Typography>
      <Grid container spacing={2}>
        {members.map((member) => (
          <Grid key={member.key} size={6}>
            <Card>
              <CardTitle>
                <Stack alignItems="center" direction="row">
                  <Typography variant="h5">{member.name}</Typography>
                  <Typography marginLeft="auto" variant="h6">
                    {toPoundsPence(member.money)}
                  </Typography>
                </Stack>
              </CardTitle>
              <CardContent>
                <Stack spacing={2}>
                  <CardJobs
                    jobs={jobs.filter(({ assignedTo }) =>
                      assignedTo.includes(member.key)
                    )}
                  />
                  <CardRewards
                    rewards={memberRewards.find(
                      ({ memberKey }) => memberKey === member.key
                    )}
                  />
                </Stack>
              </CardContent>
              <CardActions>
                <MemberActions
                  familyKey={familyKey}
                  member={member}
                  rewards={
                    memberRewards.find(
                      (memberReward) => memberReward.memberKey === member.key
                    )?.rewards ?? []
                  }
                />
              </CardActions>
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
