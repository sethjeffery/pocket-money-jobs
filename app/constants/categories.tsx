import type { IconProps } from '@phosphor-icons/react'
import type { ComponentType } from 'react'

import { BowlSteam } from '@phosphor-icons/react/BowlSteam'
import { Broom } from '@phosphor-icons/react/Broom'
import { FlowerTulip } from '@phosphor-icons/react/FlowerTulip'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { SprayBottle } from '@phosphor-icons/react/SprayBottle'

export type Categories =
  | 'cleaning'
  | 'dishes'
  | 'gardening'
  | 'general'
  | 'tidying'

const categories: Record<
  Categories,
  { Icon: ComponentType<IconProps>; name: string }
> = {
  cleaning: { Icon: SprayBottle, name: 'Cleaning' },
  dishes: { Icon: BowlSteam, name: 'Dishes' },
  gardening: { Icon: FlowerTulip, name: 'Gardening' },
  general: { Icon: Sparkle, name: 'General' },
  tidying: { Icon: Broom, name: 'Tidying' },
}

export default categories
