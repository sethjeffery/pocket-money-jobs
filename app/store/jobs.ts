import categories from '../constants/categories'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Job extends Model {
  assignedTo: string | null
  category: keyof typeof categories
  completedAt: string | null
  createdAt: string
  money: number
  name: string
}

const NAMESPACE = 'jobs'

export const BLANK_JOB = Object.freeze<Job>({
  category: 'general',
  key: '',
  name: '',
  money: 100,
  assignedTo: null,
  createdAt: new Date().toISOString(),
  completedAt: null,
})

export const getAllJobs = () => getAllModels<Job>(NAMESPACE)

export const getJob = async (key: string) =>
  (await getModel<Job>(NAMESPACE, key)) ?? BLANK_JOB

export const setJob = (key: string, args: Job) =>
  setModel<Job>(NAMESPACE, key, args)

export const delJob = (key: string) => delModel(NAMESPACE, key)
