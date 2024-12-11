import CategoryIcon from '@/app/components/category-icon'
import Coins from '@/app/components/coins'
import { getAllJobs } from '@/app/store/jobs'
import { getMember } from '@/app/store/members'
import { Box, Button, Grid2 as Grid, Stack, Typography } from '@mui/material'
import { CaretDoubleLeft } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface UserProps {
  params: Promise<{ familyKey: string; key: string }>
}

export default async function User({ params }: UserProps) {
  const { familyKey, key } = await params
  const user = await getMember(familyKey, key)
  const jobs = await getAllJobs(familyKey)

  return (
    <Stack gap={2} minHeight="100vh" padding={2}>
      <Box>
        <Link href="/">
          <Button startIcon={<CaretDoubleLeft />}>Exit</Button>
        </Link>
      </Box>
      <Stack alignItems="center" flex={1} justifyContent="center">
        <Typography variant="h1">Hello, {user.name} !</Typography>
        <Typography variant="subtitle1">
          Here are today&rsquo;s available jobs.
        </Typography>
        <Grid container wrap="wrap">
          {jobs.map((job) => (
            <div key={job.key}>
              <Typography variant="h2">{job.name}</Typography>
              <CategoryIcon category={job.category} size="2rem" />
              <Box fontSize="2rem">
                <Coins amount={job.money} />
              </Box>
            </div>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}
