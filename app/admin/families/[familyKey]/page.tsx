import interpolateModel from '@/app/helpers/interpolate-model'
import { getFamily } from '@/app/store/families'
import {
  Card,
  CardActionArea,
  CardContent,
  Grid2,
  Stack,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { MENU_ITEMS } from './constants/menu-items'

export default async function Admin({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const family = await getFamily(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Family {family.name}
      </Typography>
      <Grid2 container spacing={2}>
        {MENU_ITEMS.map(({ label, href, Icon }) => (
          <Grid2 key={label} size={6}>
            <Card>
              <CardActionArea
                LinkComponent={Link}
                href={interpolateModel(href, { familyKey })}
              >
                <CardContent>
                  <Stack direction="row" spacing={1}>
                    <Icon size={24} />
                    <Typography>{label}</Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}
