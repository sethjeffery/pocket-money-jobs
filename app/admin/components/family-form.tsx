'use client'

import { deleteFamily, saveFamily } from '@/app/actions/families'
import { BLANK_FAMILY, Family } from '@/app/store/families'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import GenericForm from './generic-form'

interface FamilyFormProps {
  family?: Readonly<Family>
  onClose: () => void
  redirectTo?: string
}

function FormContent() {
  const { control } = useFormContext<Family>()
  return (
    <Controller
      control={control}
      name="name"
      render={({ field: { ref, ...field }, fieldState }) => (
        <FormControl error={!!fieldState.error}>
          <TextField
            autoFocus
            placeholder="Name"
            size="medium"
            {...field}
            slotProps={{ input: { ref } }}
          />
          {fieldState.error && (
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
      rules={{ required: 'Name is required' }}
    />
  )
}

export default function FamilyForm({
  family = BLANK_FAMILY,
  onClose,
  redirectTo,
}: FamilyFormProps) {
  return (
    <GenericForm
      deleteAction={deleteFamily}
      model={family}
      onClose={onClose}
      redirectTo={redirectTo}
      saveAction={saveFamily}
    >
      <FormContent />
    </GenericForm>
  )
}