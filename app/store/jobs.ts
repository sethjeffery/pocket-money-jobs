import type { Categories } from '../constants/categories'
import { Reward } from '../types/reward'
import { Member } from './members'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Job extends Model {
  assignedTo: Pick<Member, 'key' | 'name'> | null
  category: Categories
  completedAt: string | null
  createdAt: string
  familyKey: string
  jobTypeKey: string
  money: number
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
  money: 100,
  assignedTo: null,
  createdAt: new Date().toISOString(),
  completedAt: null,
  reward: null,
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
