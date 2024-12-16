'use client'

import interpolateModel from '@/app/helpers/interpolate-model'
import { Family } from '@/app/store/families'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { TreeStructure } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { MENU_ITEMS } from '../../constants/menu-items'

export default function LayoutNav({ family }: { family: Family }) {
  const segment = useSelectedLayoutSegment()

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={Link}
          selected={!segment}
          href={`/admin/families/${family.key}`}
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
            selected={Boolean(segment && href.endsWith(segment))}
            href={interpolateModel(href, { familyKey: family.key })}
          >
            <ListItemIcon>
              <Icon size={24} />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
