'use client'

import { IconButton, Option, Select } from '@mui/joy'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { assignJob } from '../../actions/jobs'
import { Job } from '../../store/jobs'
import { User } from '../../store/users'

interface JobAssignmentProps {
  job: Readonly<Job>
  users: Readonly<User>[]
}

function JobAssignment({ job, users }: JobAssignmentProps) {
  const [isSaving, startSaving] = useTransition()
  const router = useRouter()
  const handleAssign = useCallback(
    (key: string, value: string | null) => {
      startSaving(async () => {
        await assignJob(key, value)
        router.refresh()
      })
    },
    [router]
  )

  return (
    <Select
      disabled={isSaving}
      endDecorator={
        job.assignedTo && (
          <IconButton
            onClick={() => handleAssign(job.key, null)}
            variant="plain"
          >
            <X />
          </IconButton>
        )
      }
      onChange={(_, value) => handleAssign(job.key, value)}
      placeholder="Choose one…"
      value={job.assignedTo}
    >
      {users.map((user) => (
        <Option key={user.key} value={user.key}>
          {user.name}
        </Option>
      ))}
    </Select>
  )
}

export default JobAssignment
