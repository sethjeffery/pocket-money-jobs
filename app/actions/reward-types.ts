'use server'

import newKey from '../store/new-key'
import { delRewardType, RewardType, setRewardType } from '../store/reward-types'

export async function saveRewardType(
  familyKey: string,
  rewardType: RewardType
) {
  return setRewardType(
    familyKey,
    rewardType.key || (await newKey()),
    rewardType
  )
}

export async function deleteRewardType(
  familyKey: string,
  rewardType: RewardType
) {
  await delRewardType(familyKey, rewardType.key)
}
