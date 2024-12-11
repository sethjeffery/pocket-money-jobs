import { getAllJobTypes } from '@/app/store/job-types'
import { Box, Table, Typography } from '@mui/material'
import NewJobTypeButton from './components/new-job-type-button'

export default async function Admin({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const jobTypes = await getAllJobTypes(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Job Types
      </Typography>
      <Table>
        <thead>
          <tr>
            <th>Job type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {jobTypes.map((jobType) => (
            <tr key={jobType.key}>
              <td>{jobType.name}</td>
              <td>{jobType.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Box marginTop={2}>
        <NewJobTypeButton familyKey={familyKey} />
      </Box>
    </>
  )
}
