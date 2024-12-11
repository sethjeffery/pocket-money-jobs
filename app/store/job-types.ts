import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface JobType extends Model {
  description: string
  familyKey: string
  name: string
}

const NAMESPACE = 'job-types'

export const BLANK_JOB_TYPE = Object.freeze<JobType>({
  description: '',
  familyKey: '',
  key: '',
  name: '',
  updatedAt: new Date().toISOString(),
})

export const getAllJobTypes = (familyKey: string) =>
  getAllModels<JobType>([NAMESPACE, familyKey])

export const getJobType = async (familyKey: string, key: string) =>
  (await getModel<JobType>([NAMESPACE, familyKey, key])) ?? BLANK_JOB_TYPE

export const setJobType = (familyKey: string, key: string, args: JobType) =>
  setModel<JobType>([NAMESPACE, familyKey, key], { ...args, familyKey, key })

export const delJobType = (familyKey: string, key: string) =>
  delModel([NAMESPACE, familyKey, key])
