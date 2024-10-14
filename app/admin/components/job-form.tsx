'use client'

import {
  Button,
  ButtonGroup,
  DialogActions,
  DialogContent,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Select,
  Stack,
} from '@mui/joy'
import { useRouter } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { Controller, ControllerRenderProps, useForm } from 'react-hook-form'
import { deleteJob, saveJob } from '../../actions/jobs'
import CategoryIcon from '../../components/category-icon'
import categories from '../../constants/categories'
import { BLANK_JOB, Job } from '../../store/jobs'

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
      buttonFlex={1}
      sx={(theme) => ({
        [theme.breakpoints.only('xs')]: {
          '--joy-fontSize-sm': '0.75rem',
          '& > button': {
            paddingLeft: '0.125rem',
            paddingRight: '0.125rem',
          },
        },
      })}
      variant="outlined"
    >
      {Object.entries(moneys).map(([label, value]) => (
        <Button
          color={field.value === value ? 'primary' : undefined}
          key={label}
          onClick={() => field.onChange(value)}
          variant={field.value === value ? 'soft' : undefined}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

interface JobFormProps {
  job?: Readonly<Job>
  onClose: () => void
}

function JobForm({ job = BLANK_JOB, onClose }: JobFormProps) {
  const router = useRouter()
  const [isSaving, startSaving] = useTransition()

  const { control, handleSubmit } = useForm<Job>({
    defaultValues: job,
  })

  const handleDelete = useCallback(() => {
    startSaving(async () => {
      await deleteJob(job.key)
      router.refresh()
      onClose()
    })
  }, [job.key, onClose, router])

  const submit = useCallback(
    (data: Job) => {
      startSaving(async () => {
        await saveJob(data)
        router.refresh()
        onClose()
      })
    },
    [onClose, router]
  )

  return (
    <form onSubmit={handleSubmit(submit)}>
      <DialogContent>
        <Stack direction="column" gap={3}>
          <Controller
            control={control}
            name="name"
            render={({ field: { ref, ...field }, fieldState }) => (
              <FormControl error={!!fieldState.error}>
                <Input
                  autoFocus
                  placeholder="New job"
                  size="lg"
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
                  size="md"
                  startDecorator={<CategoryIcon category={field.value} />}
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(String(value))
                  }}
                >
                  {Object.entries(categories).map(([value, { Icon, name }]) => (
                    <Option key={value} value={value}>
                      <Icon />
                      {name}
                    </Option>
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
        </Stack>
      </DialogContent>
      <DialogActions
        sx={(theme) => ({
          [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
        })}
      >
        <Button loading={isSaving} type="submit">
          Save changes
        </Button>
        <Button color="neutral" onClick={onClose} variant="plain">
          Cancel
        </Button>
        {job.key && (
          <Button
            color="danger"
            disabled={isSaving}
            onClick={handleDelete}
            sx={(theme) => ({
              [theme.breakpoints.up('sm')]: { marginRight: 'auto' },
            })}
            variant="outlined"
          >
            Delete
          </Button>
        )}
      </DialogActions>
    </form>
  )
}

export default JobForm
