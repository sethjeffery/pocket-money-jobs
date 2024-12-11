'use client'

import GenericForm from '@/app/admin/components/generic-form'
import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form'
import { deleteJob, saveJob } from '../../../../../actions/jobs'
import categories from '../../../../../constants/categories'
import { BLANK_JOB, Job } from '../../../../../store/jobs'

const moneys: Record<string, number> = {
  '20p': 20,
  '50p': 50,
  '£1': 100,
  '£1.50': 150,
  '£2': 200,
  '£2.50': 250,
}

type MoneyButtonGroupProps<T extends string> = {
  field: ControllerRenderProps<Job, T>
}
function MoneyButtonGroup<T extends string>({
  field,
}: MoneyButtonGroupProps<T>) {
  return (
    <ButtonGroup
      sx={(theme) => ({
        [theme.breakpoints.only('xs')]: {
          '--joy-fontSize-sm': '0.75rem',
          '& > button': {
            paddingLeft: '0.125rem',
            paddingRight: '0.125rem',
          },
        },
      })}
    >
      {Object.entries(moneys).map(([label, value]) => (
        <Button
          color="primary"
          key={label}
          onClick={() => field.onChange(value)}
          variant={field.value === value ? 'contained' : 'outlined'}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

interface JobFormProps {
  familyKey: string
  job?: Readonly<Job>
  onClose: () => void
}

function FormFields() {
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
              placeholder="New job"
              size="medium"
              {...field}
              slotProps={{ input: { ref } }}
            />
            {fieldState.error && (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            )}
          </FormControl>
        )}
        rules={{ required: 'Job name is required' }}
      />
      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <FormLabel>Category</FormLabel>
            <Select
              size="medium"
              {...field}
              onChange={(value) => {
                field.onChange(value)
              }}
            >
              {Object.entries(categories).map(([value, { Icon, name }]) => (
                <MenuItem key={value} value={value}>
                  <Icon />
                  {name}
                </MenuItem>
              ))}
            </Select>
            {fieldState.error && (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="money"
        render={({ field, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <FormLabel>Money</FormLabel>
            <MoneyButtonGroup field={field} />
          </FormControl>
        )}
      />
    </>
  )
}

function JobForm({ familyKey, job = BLANK_JOB, onClose }: JobFormProps) {
  return (
    <GenericForm
      deleteAction={(job) => deleteJob(familyKey, job.key)}
      model={job}
      onClose={onClose}
      saveAction={(job) => saveJob(familyKey, job)}
    >
      <FormFields />
    </GenericForm>
  )
}

export default JobForm
