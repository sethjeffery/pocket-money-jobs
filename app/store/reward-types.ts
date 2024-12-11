import { RewardType as Type } from '../constants/reward-type'
import { Reward } from '../types/reward'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface RewardType extends Model {
  createdAt: string
  reward: Reward
}

const NAMESPACE = 'reward-types'

export const BLANK_REWARD_TYPE = Object.freeze<RewardType>({
  createdAt: new Date().toISOString(),
  key: '',
  reward: {
    description: '',
    type: Type.none,
  },
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
