'use client'

import { deleteRewardType, saveRewardType } from '@/app/actions/reward-types'
import GenericForm from '@/app/admin/components/generic-form'
import PoundsPenceField from '@/app/admin/components/pounds-pence-field'
import FieldState from '@/app/components/field-state'
import {
  rewardCategories,
  RewardCategory,
} from '@/app/constants/reward-categories'
import { BLANK_REWARD_TYPE, RewardType } from '@/app/store/reward-types'
import {
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface RewardTypeFormProps {
  familyKey: string
  rewardType?: Readonly<RewardType>
  onClose: () => void
  redirectTo?: string
}

function FormFields() {
  const { control, watch } = useFormContext<RewardType>()
  const category = watch('category')

  return (
    <>
      <Stack direction="row" spacing={1} justifyContent="stretch">
        <Controller
          control={control}
          name="category"
          render={({ field: { ref, ...field }, fieldState }) => (
            <FormControl error={!!fieldState.error} sx={{ flex: 1 }}>
              <InputLabel>Category</InputLabel>
              <Select
                {...field}
                input={<OutlinedInput label="Category" />}
                renderValue={(selected: RewardCategory) => {
                  const { Icon, text } = rewardCategories[selected] || {}
                  return (
                    <Stack alignItems="center" direction="row">
                      <ListItemIcon sx={{ minWidth: '1.75rem' }}>
                        {Icon && <Icon />}
                      </ListItemIcon>
                      <span>{text}</span>
                    </Stack>
                  )
                }}
                size="medium"
              >
                {Object.entries(rewardCategories).map(
                  ([key, { Icon, text }]) => (
                    <MenuItem key={key} value={key}>
                      {Icon && (
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                      )}
                      <ListItemText>{text}</ListItemText>
                    </MenuItem>
                  )
                )}
              </Select>
              <FieldState {...fieldState} />
            </FormControl>
          )}
          rules={{ required: 'Name is required' }}
        />
        {category === RewardCategory.money && (
          <Controller
            control={control}
            name="amount"
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error}>
                <PoundsPenceField label="Amount" {...field} />
                <FieldState {...fieldState} />
              </FormControl>
            )}
          />
        )}
        {category === RewardCategory.time && (
          <Controller
            control={control}
            name="amount"
            render={({ field: { ref, ...field }, fieldState }) => (
              <FormControl error={!!fieldState.error}>
                <TextField
                  label="Amount"
                  {...field}
                  slotProps={{ input: { ref, endAdornment: 'minutes' } }}
                />
                <FieldState {...fieldState} />
              </FormControl>
            )}
          />
        )}
      </Stack>
      <Controller
        control={control}
        name="description"
        render={({ field: { ref, ...field }, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <TextField
              multiline
              rows={2}
              name="description"
              label="Description"
              slotProps={{ input: { ref } }}
            />
            <FieldState {...fieldState} />
          </FormControl>
        )}
      />
    </>
  )
}

export default function RewardTypeForm({
  familyKey,
  rewardType = BLANK_REWARD_TYPE,
  onClose,
  redirectTo,
}: RewardTypeFormProps) {
  return (
    <GenericForm
      deleteAction={(rewardType) => deleteRewardType(familyKey, rewardType)}
      model={rewardType}
      onClose={onClose}
      redirectTo={redirectTo}
      saveAction={(rewardType) => saveRewardType(familyKey, rewardType)}
    >
      <FormFields />
    </GenericForm>
  )
}
