import toPoundsPence from '@/app/helpers/to-pounds-pence'
import { getAllMembers } from '@/app/store/members'
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import CategoryIcon from '../../../../components/category-icon'
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell>Money</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell style={{ width: '96px' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.key}>
                <TableCell>
                  <Stack alignItems="center" direction="row" gap={1}>
                    <CategoryIcon category={job.category} />
                    {job.name}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack
                    alignItems="center"
                    direction="row"
                    flexWrap="wrap"
                    gap={0.5}
                  >
                    {toPoundsPence(job.reward?.amount || 0)}
                  </Stack>
                </TableCell>
                <TableCell>
                  <JobAssignment
                    familyKey={familyKey}
                    job={job}
                    key={job.key}
                    members={members}
                  />
                </TableCell>
                <TableCell>
                  <JobActions
                    familyKey={familyKey}
                    job={job}
                    members={members}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box marginTop={2}>
        <NewJobButton familyKey={familyKey} members={members} />
      </Box>
    </>
  )
}
