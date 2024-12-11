import { getAllMembers } from '@/app/store/members'
import { Box, Stack, Table, Typography } from '@mui/material'
import CategoryIcon from '../../../../components/category-icon'
import Coins from '../../../../components/coins'
import { getAllJobs } from '../../../../store/jobs'
import JobActions from './components/job-actions'
import JobAssignment from './components/job-assignment'
import NewJobButton from './components/new-job-button'

export default async function Admin({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const jobs = await getAllJobs(familyKey)
  const members = await getAllMembers(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Jobs available
      </Typography>
      <Table>
        <thead>
          <tr>
            <th>Job</th>
            <th>Money</th>
            <th>Assigned to</th>
            <th style={{ width: '96px' }} />
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.key}>
              <td>
                <Stack alignItems="center" direction="row" gap={1}>
                  <CategoryIcon category={job.category} />
                  {job.name}
                </Stack>
              </td>
              <td>
                <Stack
                  alignItems="center"
                  direction="row"
                  flexWrap="wrap"
                  gap={0.5}
                >
                  <Coins amount={job.money || 0} />
                </Stack>
              </td>
              <td>
                <JobAssignment
                  familyKey={familyKey}
                  job={job}
                  key={job.key}
                  members={members}
                />
              </td>
              <td>
                <JobActions familyKey={familyKey} job={job} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Box marginTop={2}>
        <NewJobButton familyKey={familyKey} />
      </Box>
    </>
  )
}
