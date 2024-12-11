'use client'

import { Member } from '@/app/store/members'
import { IconButton, MenuItem, OutlinedInput, Select } from '@mui/material'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { assignJob } from '../../../../../actions/jobs'
import { Job } from '../../../../../store/jobs'

interface JobAssignmentProps {
  familyKey: string
  job: Readonly<Job>
  members: Readonly<Member>[]
}

function JobAssignment({ job, members }: JobAssignmentProps) {
  const [isSaving, startSaving] = useTransition()
  const router = useRouter()
  const handleAssign = useCallback(
    (key: string, assignTo: string | null) => {
      startSaving(async () => {
        await assignJob(job.familyKey, key, assignTo)
        router.refresh()
      })
    },
    [job.familyKey, router]
  )

  return (
    <Select
      disabled={isSaving}
      endAdornment={
        job.assignedTo && (
          <IconButton onClick={() => handleAssign(job.key, null)}>
            <X />
          </IconButton>
        )
      }
      input={<OutlinedInput label="Select one..." />}
      onChange={(event) => handleAssign(job.key, event.target.value)}
      value={job.assignedTo?.key ?? ''}
    >
      {members.map((member) => (
        <MenuItem key={member.key} value={member.key}>
          {member.name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default JobAssignment
