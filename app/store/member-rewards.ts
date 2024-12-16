import { Reward } from '../types/reward'
import { getAllModels, getModel, Model, setModel } from './model'
import newKey from './new-key'

const NAMESPACE = 'member-rewards'

export type MemberReward = Reward & Model

export interface MemberRewards extends Model {
  familyKey: string
  memberKey: string
  rewards: MemberReward[]
}

export const BLANK_MEMBER_REWARD = Object.freeze<MemberRewards>({
  familyKey: '',
  key: '',
  memberKey: '',
  rewards: [],
  updatedAt: new Date().toISOString(),
})

export const getMemberRewards = (familyKey: string, memberKey: string) =>
  getModel<MemberRewards>([NAMESPACE, familyKey, memberKey])

export const getAllMemberRewards = (familyKey: string) =>
  getAllModels<MemberRewards>([NAMESPACE, familyKey])

export const pushMemberReward = async (
  familyKey: string,
  memberKey: string,
  reward: Reward
) => {
  const memberRewards =
    (await getModel<MemberRewards>([NAMESPACE, familyKey, memberKey])) ??
    BLANK_MEMBER_REWARD

  return setModel<MemberRewards>([NAMESPACE, familyKey, memberKey], {
    ...memberRewards,
    familyKey,
    memberKey,
    rewards: [
      ...memberRewards.rewards,
      { ...reward, key: await newKey(), updatedAt: new Date().toISOString() },
    ],
  })
}

export const popMemberReward = async (
  familyKey: string,
  memberKey: string,
  reward: MemberReward
) => {
  const memberRewards =
    (await getModel<MemberRewards>([NAMESPACE, familyKey, memberKey])) ??
    BLANK_MEMBER_REWARD

  return setModel<MemberRewards>([NAMESPACE, familyKey, memberKey], {
    ...memberRewards,
    familyKey,
    memberKey,
    rewards: memberRewards.rewards.filter((r) => r.key !== reward.key),
  })
}
