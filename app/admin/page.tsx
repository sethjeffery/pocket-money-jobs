import { getAllFamilies } from '@/app/store/families'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material'
import FamilyActions from './components/family-actions'
import NewFamilyButton from './components/new-family-button'

export default async function Admin() {
  const families = await getAllFamilies()

  return (
    <Stack direction="row" minHeight="100vh">
      <Stack flex="1" minHeight="100vh" padding={2}>
        <Typography marginBottom={2} variant="h1">
          Families
        </Typography>
        <Grid container spacing={2}>
          {families.map((family) => (
            <Grid key={family.key} size={8}>
              <Card>
                <CardContent>
                  <Typography variant="h2">{family.name}</Typography>
                </CardContent>
                <CardActions>
                  <FamilyActions family={family} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box marginTop={2}>
          <NewFamilyButton />
        </Box>
      </Stack>
    </Stack>
  )
}
