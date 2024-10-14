'use client'

import { IconProps } from '@phosphor-icons/react'
import type { Categories } from '../constants/categories'
import categories from '../constants/categories'

function CategoryIcon({
  category,
  ...props
}: { category?: Categories } & IconProps) {
  const { Icon } = categories[category ?? 'general']
  return <Icon {...props} />
}

export default CategoryIcon
