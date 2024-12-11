import { RewardType } from '../constants/reward-type'

export interface BaseReward {
  description: string
  type: RewardType
}

export interface NoReward extends BaseReward {
  type: RewardType.none
}

export interface MoneyReward extends BaseReward {
  amount: number
  type: RewardType.money
}

export interface InternetReward extends BaseReward {
  durationSeconds: number
  type: RewardType.internet
}

export interface PlayTimeReward extends BaseReward {
  durationSeconds: number
  type: RewardType.playTime
}

export interface VoucherReward extends BaseReward {
  type: RewardType.voucher
}

export type Reward =
  | MoneyReward
  | InternetReward
  | PlayTimeReward
  | VoucherReward
  | NoReward
