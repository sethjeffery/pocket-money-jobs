'use client'

import { deleteMember, saveMember } from '@/app/actions/members'
import GenericForm from '@/app/admin/components/generic-form'
import { BLANK_MEMBER, Member } from '@/app/store/members'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface MemberFormProps {
  familyKey: string
  member?: Readonly<Member>
  onClose: () => void
  redirectTo?: string
}

function FormFields() {
  const { control } = useFormContext<Member>()
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

export default function MemberForm({
  familyKey,
  member = BLANK_MEMBER,
  onClose,
  redirectTo,
}: MemberFormProps) {
  return (
    <GenericForm
      deleteAction={(member) => deleteMember(familyKey, member)}
      model={member}
      onClose={onClose}
      redirectTo={redirectTo}
      saveAction={(member) => saveMember(familyKey, member)}
    >
      <FormFields />
    </GenericForm>
  )
}
