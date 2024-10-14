'use server'

import { BLANK_JOB, delJob, getJob, Job, setJob } from '../store/jobs'
import { v4 as uuidv4 } from 'uuid'

export async function saveJob(job: Job) {
  await setJob(job.key || uuidv4(), job)
}

export async function assignJob(jobKey: string, assignedTo: string | null) {
  const job = await getJob(jobKey)
  await setJob(jobKey, { ...job, assignedTo })
}

export async function completeJob(jobKey: string) {
  const job = (await getJob(jobKey)) ?? BLANK_JOB
  await setJob(jobKey, { ...job, completedAt: new Date().toISOString() })
}

export async function uncompleteJob(jobKey: string) {
  const job = (await getJob(jobKey)) ?? BLANK_JOB
  await setJob(jobKey, { ...job, completedAt: null })
}

export async function deleteJob(jobKey: string) {
  await delJob(jobKey)
}
