import {
  Broom,
  NotePencil,
  Person,
  TipJar,
} from '@phosphor-icons/react/dist/ssr'

export const MENU_ITEMS = [
  {
    label: 'Members',
    href: '/admin/families/:familyKey/members',
    Icon: Person,
  },
  {
    label: 'Jobs',
    href: '/admin/families/:familyKey/jobs',
    Icon: Broom,
  },
  {
    label: 'Job types',
    href: '/admin/families/:familyKey/job-types',
    Icon: NotePencil,
  },
  {
    label: 'Pay outs',
    href: '/admin/families/:familyKey/pay-outs',
    Icon: TipJar,
  },
]
