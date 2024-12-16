import PoundsPenceField from '@/app/admin/components/pounds-pence-field'
import FieldState from '@/app/components/field-state'
import {
  rewardCategories,
  RewardCategory,
} from '@/app/constants/reward-categories'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export default function RewardFieldGroup({ group }: { group?: string }) {
  const { control, watch } = useFormContext()
  const grouped = (field: string) => [group, field].filter((s) => s).join('.')
  const category = watch(grouped('category'))

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Controller
          control={control}
          name={grouped('category')}
          render={({ field: { ref: _ref, ...field }, fieldState }) => (
            <FormControl error={!!fieldState.error} sx={{ flex: 1 }}>
              <InputLabel shrink>Reward</InputLabel>
              <Select
                {...field}
                displayEmpty
                fullWidth
                label="Reward"
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
              >
                {Object.entries(rewardCategories).map(
                  ([key, { Icon, text }]) => (
                    <MenuItem key={key} value={key}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText>{text}</ListItemText>
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          )}
        />
        {category === RewardCategory.money && (
          <Controller
            control={control}
            name={grouped('amount')}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error} sx={{ flex: 1 }}>
                <PoundsPenceField label="Amount" {...field} />
                <FieldState {...fieldState} />
              </FormControl>
            )}
          />
        )}
        {category === RewardCategory.time && (
          <Controller
            control={control}
            name={grouped('amount')}
            render={({ field: { ref, ...field }, fieldState }) => (
              <FormControl error={!!fieldState.error} sx={{ flex: 1 }}>
                <TextField
                  label="Amount"
                  {...field}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                    input: {
                      ref,
                      endAdornment: (
                        <InputAdornment position="end">minutes</InputAdornment>
                      ),
                    },
                  }}
                />
                <FieldState {...fieldState} />
              </FormControl>
            )}
          />
        )}
      </Stack>
      {category !== RewardCategory.none && (
        <Controller
          control={control}
          name={grouped('description')}
          render={({ field, fieldState }) => (
            <FormControl error={!!fieldState.error} fullWidth>
              <TextField label="Reward details" multiline rows={2} {...field} />
              <FieldState {...fieldState} />
            </FormControl>
          )}
          rules={{
            required:
              'Please provide a description of the reward, e.g. Pocket money, TV time',
          }}
        />
      )}
    </>
  )
}
