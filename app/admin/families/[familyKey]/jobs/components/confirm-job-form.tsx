'use client'

import { Member } from '@/app/store/members'
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { Fragment } from 'react'
import { Job } from '../../../../../store/jobs'

interface JobFormProps {
  assignees: Member[]
  familyKey: string
  job: Readonly<Job>
  onClose: () => void
}

function Assignees({ assignees }: { assignees: Member[] }) {
  return (
    <>
      {assignees.map((assignee, index) => (
        <Fragment key={assignee.key}>
          <strong>{assignee.name}</strong>
          {index < assignees.length - 1 ? ', ' : ''}
        </Fragment>
      ))}
    </>
  )
}

export default function ConfirmJobForm({
  assignees,
  familyKey,
  job,
  onClose,
}: JobFormProps) {
  return (
    <>
      <DialogTitle>Confirm job</DialogTitle>
      <DialogContent>
        <Typography>
          This will confirm that <strong>{job.name}</strong> has been completed.
        </Typography>
        <Typography>
          <Assignees assignees={assignees} /> will receive the reward for this
          job.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} variant="contained">
          Confirm
        </Button>
        <Button onClick={() => onClose()}>Cancel</Button>
      </DialogActions>
    </>
  )
}
