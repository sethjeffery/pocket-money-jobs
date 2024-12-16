import type { Icon } from '@phosphor-icons/react'

import { Clock, Coins, Empty, Ticket } from '@phosphor-icons/react/dist/ssr'

enum RewardCategory {
  money = 'money',
  none = '',
  time = 'time',
  voucher = 'voucher',
}

const rewardCategories: Record<RewardCategory, { text: string; Icon: Icon }> = {
  [RewardCategory.money]: { text: 'Pocket money', Icon: Coins },
  [RewardCategory.none]: { text: 'No reward', Icon: Empty },
  [RewardCategory.time]: {
    text: 'Time',
    Icon: Clock,
  },
  [RewardCategory.voucher]: { text: 'Voucher', Icon: Ticket },
}

export { rewardCategories, RewardCategory }
