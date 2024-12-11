'use server'

import { delJobType, JobType, setJobType } from '../store/job-types'
import newKey from '../store/new-key'

export async function saveJobType(familyKey: string, jobType: JobType) {
  return setJobType(familyKey, jobType.key || (await newKey()), jobType)
}

export async function deleteJobType(familyKey: string, jobtype: JobType) {
  await delJobType(familyKey, jobtype.key)
}
