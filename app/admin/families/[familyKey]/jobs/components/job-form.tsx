import GenericForm from '@/app/admin/components/generic-form'
import { Member } from '@/app/store/members'
import { deleteJob, saveJob } from '../../../../../actions/jobs'
import { BLANK_JOB, Job } from '../../../../../store/jobs'
import JobFormFields from './job-form-fields'

interface JobFormProps {
  familyKey: string
  job?: Readonly<Job>
  members: Member[]
  onClose: () => void
}

export default function JobForm({
  familyKey,
  job = BLANK_JOB,
  members,
  onClose,
}: JobFormProps) {
  return (
    <GenericForm
      deleteAction={(job) => deleteJob(familyKey, job.key)}
      model={job}
      onClose={onClose}
      saveAction={(job) => saveJob(familyKey, job)}
    >
      <JobFormFields members={members} />
    </GenericForm>
  )
}
