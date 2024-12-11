import { getAllPayOuts } from '@/app/store/pay-outs'
import { Table, Typography } from '@mui/material'

export default async function Admin({
  params,
}: {
  params: Promise<{ familyKey: string }>
}) {
  const { familyKey } = await params
  const payOuts = await getAllPayOuts(familyKey)

  return (
    <>
      <Typography marginBottom={2} variant="h1">
        Pay-outs
      </Typography>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {payOuts.map((payOut) => (
            <tr key={payOut.key}>
              <td>{payOut.actionedAt}</td>
              <td>{payOut.totalAmount}</td>
              <td>{payOut.member?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
