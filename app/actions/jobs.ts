'use server'

import { BLANK_JOB, delJob, getJob, Job, setJob } from '../store/jobs'
import { getMember } from '../store/members'
import newKey from '../store/new-key'

export async function saveJob(familyKey: string, job: Job) {
  return setJob(familyKey, job.key || (await newKey()), job)
}

export async function assignJob(
  familyKey: string,
  jobKey: string,
  memberKey: string | null
) {
  const job = await getJob(familyKey, jobKey)
  const member = memberKey ? await getMember(familyKey, memberKey) : null
  return setJob(familyKey, jobKey, { ...job, assignedTo: member })
}

export async function completeJob(familyKey: string, jobKey: string) {
  const job = (await getJob(familyKey, jobKey)) ?? BLANK_JOB
  return setJob(familyKey, jobKey, {
    ...job,
    completedAt: new Date().toISOString(),
  })
}

export async function uncompleteJob(familyKey: string, jobKey: string) {
  const job = (await getJob(familyKey, jobKey)) ?? BLANK_JOB
  return setJob(familyKey, jobKey, { ...job, completedAt: null })
}

export async function deleteJob(familyKey: string, jobKey: string) {
  await delJob(familyKey, jobKey)
}
