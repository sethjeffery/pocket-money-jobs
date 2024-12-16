'use client'

import { Member } from '@/app/store/members'
import { useRouter } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { assignJob } from '../../../../../actions/jobs'
import { Job } from '../../../../../store/jobs'
import AssignedToSelect from './assigned-to-select'

interface JobAssignmentProps {
  familyKey: string
  job: Readonly<Job>
  members: Readonly<Member>[]
}

function JobAssignment({ job, members }: JobAssignmentProps) {
  const [isSaving, startSaving] = useTransition()
  const router = useRouter()
  const handleAssign = useCallback(
    (key: string, assignTo: string[]) => {
      startSaving(async () => {
        await assignJob(job.familyKey, key, assignTo)
        router.refresh()
      })
    },
    [job.familyKey, router]
  )

  return (
    <AssignedToSelect
      disabled={isSaving}
      fullWidth
      members={members}
      onChange={(event) =>
        handleAssign(
          job.key,
          Array.isArray(event.target.value)
            ? event.target.value
            : [event.target.value]
        )
      }
      size="small"
      value={job.assignedTo || []}
    />
  )
}

export default JobAssignment
