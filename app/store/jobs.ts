import type { JobCategories } from '../constants/job-categories'
import { RewardCategory } from '../constants/reward-categories'
import { Reward } from '../types/reward'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Job extends Model {
  assignedTo: string[]
  category: JobCategories
  completedAt: string | null
  createdAt: string
  familyKey: string
  jobTypeKey: string
  name: string
  reward: Reward | null
}

const NAMESPACE = 'jobs'

export const BLANK_JOB = Object.freeze<Job>({
  category: 'general',
  familyKey: '',
  key: '',
  jobTypeKey: '',
  name: '',
  assignedTo: [],
  createdAt: new Date().toISOString(),
  completedAt: null,
  reward: {
    amount: 0,
    description: '',
    duration: 0,
    category: RewardCategory.none,
  },
  updatedAt: new Date().toISOString(),
})

export const getAllJobs = (familyKey: string) =>
  getAllModels<Job>([NAMESPACE, familyKey])

export const getJob = async (familyKey: string, key: string) =>
  (await getModel<Job>([NAMESPACE, familyKey, key])) ?? BLANK_JOB

export const setJob = (familyKey: string, key: string, args: Job) =>
  setModel<Job>([NAMESPACE, familyKey, key], { ...args, familyKey, key })

export const delJob = (familyKey: string, key: string) =>
  delModel([NAMESPACE, familyKey, key])
