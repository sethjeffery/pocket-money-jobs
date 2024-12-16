'use client'

import jobCategories from '@/app/constants/job-categories'
import toPoundsPence from '@/app/helpers/to-pounds-pence'
import { Job } from '@/app/store/jobs'
import { Box, Stack, Typography } from '@mui/material'

export default function CardJobs({ jobs }: { jobs: Job[] }) {
  if (jobs) {
    return (
      <Box>
        <Typography variant="h6">Assigned jobs</Typography>
        {jobs.map((job) => {
          const Icon = jobCategories[job.category].Icon
          return (
            <Stack key={job.key} direction="row" gap={1} alignItems="center">
              {Icon && <Icon />}
              <Typography>
                {job.name}
                {job.reward?.amount && ` - ${toPoundsPence(job.reward.amount)}`}
              </Typography>
            </Stack>
          )
        })}
      </Box>
    )
  }
}
