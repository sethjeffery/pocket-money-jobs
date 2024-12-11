'use client'

import { completeJob, uncompleteJob } from '@/app/actions/jobs'
import StyledIconButton from '@/app/components/styled-icon-button'
import { Dialog, IconButton, Stack } from '@mui/material'
import { Pencil, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Job } from '../../../../../store/jobs'
import JobForm from './job-form'

function JobActions({ familyKey, job }: { familyKey: string; job: Job }) {
  const [isOpen, setOpen] = useState(false)
  const [isSaving, startSaving] = useTransition()
  const router = useRouter()
  const isCompleted = job.completedAt !== null

  return (
    <>
      <Stack direction="row" spacing={1}>
        <StyledIconButton
          color={isCompleted ? 'success' : 'default'}
          disabled={isSaving}
          onClick={() => {
            startSaving(async () => {
              if (isCompleted) {
                await uncompleteJob(familyKey, job.key)
              } else {
                await completeJob(familyKey, job.key)
              }
              router.refresh()
            })
          }}
          variant={isCompleted ? 'contained' : 'default'}
        >
          {isCompleted ? <ThumbsUp /> : <ThumbsUp />}
        </StyledIconButton>
        <IconButton onClick={() => setOpen(true)} title="Edit">
          <Pencil />
        </IconButton>
      </Stack>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <JobForm
          familyKey={familyKey}
          job={job}
          onClose={() => setOpen(false)}
        />
      </Dialog>
    </>
  )
}

export default JobActions
