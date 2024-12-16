'use client'

import { MemberRewards } from '@/app/store/member-rewards'
import { Box, Typography } from '@mui/material'

export default function CardRewards({
  rewards,
}: {
  rewards?: Readonly<MemberRewards>
}) {
  if (rewards?.rewards) {
    return (
      <Box>
        {rewards.rewards.map((reward) => (
          <Typography key={reward.key}>{reward.description}</Typography>
        ))}
      </Box>
    )
  }
}
