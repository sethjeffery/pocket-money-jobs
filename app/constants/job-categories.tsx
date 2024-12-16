import type { Icon } from '@phosphor-icons/react'

import {
  BowlSteam,
  Broom,
  FlowerTulip,
  Sparkle,
  SprayBottle,
} from '@phosphor-icons/react/dist/ssr'

export enum JobCategories {
  Cleaning = 'cleaning',
  Dishes = 'dishes',
  Gardening = 'gardening',
  General = 'general',
  Tidying = 'tidying',
}

const jobCategories: Record<JobCategories, { Icon: Icon; name: string }> = {
  [JobCategories.Cleaning]: { Icon: SprayBottle, name: 'Cleaning' },
  [JobCategories.Dishes]: { Icon: BowlSteam, name: 'Dishes' },
  [JobCategories.Gardening]: { Icon: FlowerTulip, name: 'Gardening' },
  [JobCategories.General]: { Icon: Sparkle, name: 'General' },
  [JobCategories.Tidying]: { Icon: Broom, name: 'Tidying' },
}

export default jobCategories
