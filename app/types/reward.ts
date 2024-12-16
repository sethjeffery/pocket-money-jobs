import { RewardCategory } from '../constants/reward-categories'

export interface Reward {
  amount: number
  description: string
  duration: number
  category: RewardCategory
}
