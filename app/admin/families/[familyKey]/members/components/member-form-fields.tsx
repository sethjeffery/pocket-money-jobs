import PoundsPenceField from '@/app/admin/components/pounds-pence-field'
import FieldState from '@/app/components/field-state'
import { Member } from '@/app/store/members'
import { FormControl, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Controller, useFormContext } from 'react-hook-form'

export default function MemberFormFields() {
  const { control } = useFormContext<Member>()
  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref, ...field }, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <TextField
              autoFocus
              label="Name"
              size="medium"
              {...field}
              slotProps={{ input: { ref } }}
            />
            <FieldState {...fieldState} />
          </FormControl>
        )}
        rules={{ required: 'Name is required' }}
      />
      <Controller
        control={control}
        name="dob"
        render={({ field: { ref, ...field }, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <DatePicker
              {...field}
              label="Date of Birth"
              value={dayjs(field.value)}
              slotProps={{ textField: { ref } }}
            />
            <FieldState {...fieldState} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="money"
        render={({ field, fieldState }) => (
          <FormControl error={!!fieldState.error}>
            <PoundsPenceField label="Money waiting to be paid" {...field} />
            <FieldState {...fieldState} />
          </FormControl>
        )}
      />
    </>
  )
}
