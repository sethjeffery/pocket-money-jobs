import { RewardCategory } from '../constants/reward-categories'
import { Reward } from '../types/reward'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export type RewardType = Reward &
  Model & {
    createdAt: string
    familyKey: string
  }

const NAMESPACE = 'reward-types'

export const BLANK_REWARD_TYPE = Object.freeze<RewardType>({
  createdAt: new Date().toISOString(),
  familyKey: '',
  key: '',
  description: '',
  amount: 0,
  category: RewardCategory.none,
  updatedAt: new Date().toISOString(),
})

export const getAllRewardTypes = (familyKey: string) =>
  getAllModels<RewardType>([NAMESPACE, familyKey])

export const getRewardType = async (familyKey: string, key: string) =>
  (await getModel<RewardType>([NAMESPACE, familyKey, key])) ?? BLANK_REWARD_TYPE

export const setRewardType = (
  familyKey: string,
  key: string,
  args: RewardType
) =>
  setModel<RewardType>([NAMESPACE, familyKey, key], { ...args, familyKey, key })

export const delRewardType = (familyKey: string, key: string) =>
  delModel([NAMESPACE, familyKey, key])
