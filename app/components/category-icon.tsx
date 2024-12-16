'use client'

import { IconProps } from '@phosphor-icons/react'
import type { JobCategories } from '../constants/job-categories'
import jobCategories from '../constants/job-categories'

function CategoryIcon({
  category,
  ...props
}: { category?: JobCategories } & IconProps) {
  const { Icon } = jobCategories[category ?? 'general']
  return <Icon {...props} />
}

export default CategoryIcon
