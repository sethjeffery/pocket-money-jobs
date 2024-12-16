'use client'

import FieldState from '@/app/components/field-state'
import { Member } from '@/app/store/members'
import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import jobCategories from '../../../../../constants/job-categories'
import { Job } from '../../../../../store/jobs'
import AssignedToSelect from './assigned-to-select'
import RewardFieldGroup from './reward-field-group'

export default function JobFormFields({ members }: { members: Member[] }) {
  const { control } = useFormContext<Job>()

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref, ...field }, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <TextField
              autoFocus
              label="Job"
              placeholder="Describe your job e.g. Wash the dishes"
              size="large"
              {...field}
              slotProps={{ input: { ref }, inputLabel: { shrink: true } }}
            />
            <FieldState {...fieldState} />
          </FormControl>
        )}
        rules={{ required: 'Job name is required' }}
      />
      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <InputLabel>Category</InputLabel>
            <Select
              {...field}
              label="Category"
              renderValue={(selected) => {
                const { Icon, name } = jobCategories[selected] || {}
                return (
                  <Stack alignItems="center" direction="row">
                    <ListItemIcon sx={{ minWidth: '1.75rem' }}>
                      {Icon && <Icon />}
                    </ListItemIcon>
                    <span>{name}</span>
                  </Stack>
                )
              }}
            >
              {Object.entries(jobCategories).map(([value, { Icon, name }]) => (
                <MenuItem key={value} value={value}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </MenuItem>
              ))}
            </Select>
            <FieldState {...fieldState} />
          </FormControl>
        )}
      />
      <RewardFieldGroup group="reward" />
      <Controller
        control={control}
        name="assignedTo"
        render={({ field, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <InputLabel shrink>Assigned to</InputLabel>
            <AssignedToSelect
              members={members}
              {...field}
              label="Assigned to"
            />
            <FieldState {...fieldState} />
          </FormControl>
        )}
      />
    </>
  )
}
