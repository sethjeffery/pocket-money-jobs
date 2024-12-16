'use client'

import StyledIconButton from '@/app/components/styled-icon-button'
import { Member } from '@/app/store/members'
import { Dialog, DialogTitle, IconButton, Stack, Tooltip } from '@mui/material'
import { Pencil, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Job } from '../../../../../store/jobs'
import ConfirmJobForm from './confirm-job-form'
import JobForm from './job-form'

function JobActions({
  familyKey,
  job,
  members,
}: {
  familyKey: string
  job: Job
  members: Member[]
}) {
  const [isEditing, setEditing] = useState(false)
  const [isConfirming, setConfirming] = useState(false)
  const [isSaving, startSaving] = useTransition()
  const router = useRouter()
  const isCompleted = job.completedAt !== null

  return (
    <>
      <Stack direction="row" spacing={1}>
        {/*<Tooltip
          title={isCompleted ? 'Mark as not complete' : 'Mark as complete'}
        >
           <StyledIconButton
            color={isCompleted ? 'success' : 'default'}
            disabled={isSaving}
            onClick={() => {
              startSaving(async () => {
                await completeJob(familyKey, job.key)
                router.refresh()
              })
            }}
            variant={isCompleted ? 'contained' : 'default'}
          >
            {isCompleted ? <ThumbsUp /> : <ThumbsUp />}
          </StyledIconButton>
        </Tooltip> */}

        <Tooltip title="Confirm job">
          <StyledIconButton
            color="success"
            onClick={() => setConfirming(true)}
            variant="outlined"
          >
            <ThumbsUp />
          </StyledIconButton>
        </Tooltip>

        <Tooltip title="Edit">
          <IconButton onClick={() => setEditing(true)}>
            <Pencil />
          </IconButton>
        </Tooltip>
      </Stack>
      <Dialog fullWidth onClose={() => setEditing(false)} open={isEditing}>
        <DialogTitle>Edit Job</DialogTitle>
        <JobForm
          familyKey={familyKey}
          job={job}
          members={members}
          onClose={() => setEditing(false)}
        />
      </Dialog>
      <Dialog
        fullWidth
        onClose={() => setConfirming(false)}
        open={isConfirming}
      >
        <ConfirmJobForm
          assignees={members.filter((member) =>
            job.assignedTo.includes(member.key)
          )}
          familyKey={familyKey}
          job={job}
          onClose={() => setConfirming(false)}
        />
      </Dialog>
    </>
  )
}

export default JobActions
