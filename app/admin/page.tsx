import { Box, Stack, Table, Typography } from '@mui/joy'
import CategoryIcon from '../components/category-icon'
import Coins from '../components/coins'
import { getAllJobs } from '../store/jobs'
import { getAllUsers } from '../store/users'
import JobActions from './components/job-actions'
import JobAssignment from './components/job-assignment'
import NewJobButton from './components/new-job-button'

export default async function Home() {
  const jobs = await getAllJobs()
  const users = await getAllUsers()

  return (
    <Stack minHeight="100vh" padding={2}>
      <Typography level="h1" marginBottom={2}>
        Jobs available
      </Typography>
      <Table
        borderAxis="xBetween"
        sx={{
          fontSize: '1.25rem',
          '--TableCell-headBackground': 'transparent',
        }}
      >
        <thead>
          <tr>
            <th>Job</th>
            <th>Money</th>
            <th>Assigned to</th>
            <th style={{ width: '48px' }} />
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
                <JobAssignment job={job} key={job.key} users={users} />
              </td>
              <td>
                <JobActions job={job} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Box marginTop={2}>
        <NewJobButton />
      </Box>
    </Stack>
  )
}
