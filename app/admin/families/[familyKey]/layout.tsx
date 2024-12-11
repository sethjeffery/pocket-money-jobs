import interpolateModel from '@/app/helpers/interpolate-model'
import { getFamily } from '@/app/store/families'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import { TreeStructure } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { MENU_ITEMS } from './constants/menu-items'

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
        <List>
          <ListItem disablePadding>
            <ListItemButton
              LinkComponent={Link}
              href={`/admin/families/${familyKey}`}
            >
              <ListItemIcon>
                <TreeStructure size={24} />
              </ListItemIcon>
              <ListItemText primary="Family" secondary={family.name} />
            </ListItemButton>
          </ListItem>
          <Divider />
          {MENU_ITEMS.map(({ href, Icon, label }) => (
            <ListItem disablePadding key={label}>
              <ListItemButton
                LinkComponent={Link}
                href={interpolateModel(href, { familyKey })}
              >
                <ListItemIcon>
                  <Icon size={24} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Stack flex="1" minHeight="100vh" padding={2}>
        {children}
      </Stack>
    </Stack>
  )
}
