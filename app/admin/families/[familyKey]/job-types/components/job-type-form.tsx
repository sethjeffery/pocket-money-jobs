'use client'

import { deleteJobType, saveJobType } from '@/app/actions/job-types'
import GenericForm from '@/app/admin/components/generic-form'
import { BLANK_JOB_TYPE, JobType } from '@/app/store/job-types'
import { FormControl, FormHelperText, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface JobTypeFormProps {
  familyKey: string
  jobType?: Readonly<JobType>
  onClose: () => void
  redirectTo?: string
}

function FormFields() {
  const { control } = useFormContext<JobType>()
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

export default function JobTypeForm({
  familyKey,
  jobType = BLANK_JOB_TYPE,
  onClose,
  redirectTo,
}: JobTypeFormProps) {
  return (
    <GenericForm
      deleteAction={(jobType) => deleteJobType(familyKey, jobType)}
      model={jobType}
      onClose={onClose}
      redirectTo={redirectTo}
      saveAction={(jobType) => saveJobType(familyKey, jobType)}
    >
      <FormFields />
    </GenericForm>
  )
}
