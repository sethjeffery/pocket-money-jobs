import { getFamily } from '@/app/store/families'
import { Drawer, Stack } from '@mui/material'
import LayoutNav from './reward-types/components/layout-nav'

const DRAWER_WIDTH = 240

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const family = await getFamily(familyKey)

  return (
    <Stack direction="row" minHeight="100vh">
      <Drawer
        open
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
      >
        <LayoutNav family={family} />
      </Drawer>
      <Stack flex="1" minHeight="100vh" padding={2}>
        {children}
      </Stack>
    </Stack>
  )
}
