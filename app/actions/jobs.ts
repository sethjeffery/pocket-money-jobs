'use server'

import { BLANK_JOB, delJob, getJob, Job, setJob } from '../store/jobs'
import newKey from '../store/new-key'

export async function saveJob(familyKey: string, job: Job) {
  return setJob(familyKey, job.key || (await newKey()), job)
}

export async function assignJob(
  familyKey: string,
  jobKey: string,
  memberKeys: string[]
) {
  const job = await getJob(familyKey, jobKey)
  return setJob(familyKey, jobKey, { ...job, assignedTo: memberKeys })
}

export async function completeJob(familyKey: string, jobKey: string) {
  const job = (await getJob(familyKey, jobKey)) ?? BLANK_JOB
  // if (job.assignedTo && job.reward) {
  //   await pushMemberReward(familyKey, job.assignedTo.key, job.reward)
  // }
  await deleteJob(familyKey, jobKey)
}

export async function deleteJob(familyKey: string, jobKey: string) {
  await delJob(familyKey, jobKey)
}
