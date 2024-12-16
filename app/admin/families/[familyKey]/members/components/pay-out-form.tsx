import PoundsPenceField from '@/app/admin/components/pounds-pence-field'
import {
  rewardCategories,
  RewardCategory,
} from '@/app/constants/reward-categories'
import { Member } from '@/app/store/members'
import { Reward } from '@/app/types/reward'
import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'
import { Fragment, useMemo } from 'react'

function groupRewards(member: Member, rewards: Reward[]): Reward[] {
  const groupedRewards: Reward[] = []

  if (member.money) {
    groupedRewards.push({
      amount: member.money,
      category: RewardCategory.money,
      description: '',
      duration: 0,
    })
  }

  for (const reward of rewards) {
    if (reward.category === RewardCategory.voucher) {
      groupedRewards.push(reward)
    }
  }

  return groupedRewards
}

export default function PayOutForm({
  member,
  rewards,
  onClose,
}: {
  member: Member
  onClose: () => void
  rewards: Reward[]
}) {
  const groupedRewards = useMemo(
    () => groupRewards(member, rewards),
    [member, rewards]
  )

  if (groupedRewards.length === 0) {
    return (
      <>
        <DialogContent>
          <Typography>
            There are no rewards to pay out for <strong>{member.name}</strong>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </>
    )
  }

  return (
    <>
      <DialogContent>
        <Typography>
          Are you ready to pay out <strong>{member.name}</strong>&rsquo;s
          rewards and reset their balance?
        </Typography>
        <Box marginTop={2}>
          {groupedRewards.map((reward, index) => {
            const { Icon, text } = rewardCategories[reward.category]

            return (
              <Fragment key={index}>
                <FormControlLabel
                  control={<Checkbox value={index} />}
                  key={index}
                  label={
                    <Stack alignItems="center" direction="row" gap={1}>
                      {Icon && <Icon size={24} />}
                      {reward.description || text}
                    </Stack>
                  }
                />
                {reward.category === RewardCategory.money && (
                  <PoundsPenceField
                    onChange={() => {}}
                    size="small"
                    value={30}
                  />
                )}
              </Fragment>
            )
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained">Confirm Pay out</Button>
      </DialogActions>
    </>
  )
}
