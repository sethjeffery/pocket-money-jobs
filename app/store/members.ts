import { Reward } from '../types/reward'
import { Job } from './jobs'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Member extends Model {
  dob: Date
  familyKey: string
  money: number
  name: string
}

export interface MemberWithData extends Member {
  jobs: Job[]
  rewards: Reward[]
}

const NAMESPACE = 'members'

export const BLANK_MEMBER = Object.freeze<Member>({
  key: '',
  familyKey: '',
  name: '',
  money: 0,
  dob: new Date(),
  updatedAt: new Date().toISOString(),
})

export const getAllMembers = (familyKey: string) =>
  getAllModels<Member>([NAMESPACE, familyKey])

export const getMember = async (familyKey: string, key: string) =>
  (await getModel<Member>([NAMESPACE, familyKey, key])) ?? BLANK_MEMBER

export const setMember = (familyKey: string, key: string, args: Member) =>
  setModel<Member>([NAMESPACE, familyKey, key], { ...args, familyKey, key })

export const delMember = (familyKey: string, key: string) =>
  delModel([NAMESPACE, familyKey, key])
