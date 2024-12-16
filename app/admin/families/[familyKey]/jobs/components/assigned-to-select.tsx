'use client'

import { Member } from '@/app/store/members'
import {
  BaseSelectProps,
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material'

interface AssignedToSelectProps extends BaseSelectProps<string[]> {
  members: Member[]
  value: string[]
}

export default function AssignedToSelect({
  members,
  value,
  ...props
}: AssignedToSelectProps) {
  return (
    <Select<string[]>
      {...props}
      displayEmpty
      multiple
      renderValue={(selected) =>
        selected?.length
          ? selected
              .map(
                (value) => members.find((member) => member.key === value)?.name
              )
              .join(', ')
          : 'Anyone'
      }
      value={value}
    >
      {members.map((member) => (
        <MenuItem key={member.key} value={member.key} disabled={props.disabled}>
          <Checkbox checked={value.includes(member.key)} />
          <ListItemText primary={member.name} />
        </MenuItem>
      ))}
    </Select>
  )
}
