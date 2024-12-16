import { RewardCategory } from '@/app/constants/reward-categories'
import toPoundsPence from '@/app/helpers/to-pounds-pence'
import { getAllRewardTypes } from '@/app/store/reward-types'
import { Box, Table, Typography } from '@mui/material'
import NewRewardTypeButton from './components/new-reward-type-button'

export default async function Admin({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const rewardTypes = await getAllRewardTypes(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Reward Types
      </Typography>
      <Table>
        <thead>
          <tr>
            <th>Job type</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rewardTypes.map((rewardType) => (
            <tr key={rewardType.key}>
              <td>{rewardType.category}</td>
              <td>{rewardType.description}</td>
              <td>
                {rewardType.category === RewardCategory.money &&
                  toPoundsPence(rewardType.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Box marginTop={2}>
        <NewRewardTypeButton familyKey={familyKey} />
      </Box>
    </>
  )
}
