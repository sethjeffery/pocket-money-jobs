'use client'

import { Member } from '@/app/store/members'
import { Reward } from '@/app/types/reward'
import { Button, Dialog, DialogTitle, IconButton, Stack } from '@mui/material'
import { Pencil, TipJar } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import MemberForm from './member-form'
import PayOutForm from './pay-out-form'

export default function MemberActions({
  familyKey,
  member,
  rewards,
}: {
  familyKey: string
  member: Member
  rewards: Reward[]
}) {
  const [isEditing, setEditing] = useState(false)
  const [isPayingOut, setPayingOut] = useState(false)

  return (
    <>
      <Stack direction="row" gap={1} width="100%" justifyContent="end">
        <Button
          size="small"
          variant="outlined"
          startIcon={<TipJar />}
          onClick={() => setPayingOut(true)}
        >
          Pay out
        </Button>
        <IconButton
          size="small"
          onClick={() => setEditing(true)}
          color="primary"
        >
          <Pencil />
        </IconButton>
      </Stack>
      <Dialog fullWidth onClose={() => setEditing(false)} open={isEditing}>
        <DialogTitle>Edit Family Member</DialogTitle>
        <MemberForm
          familyKey={familyKey}
          member={member}
          onClose={() => setEditing(false)}
        />
      </Dialog>
      <Dialog fullWidth onClose={() => setPayingOut(false)} open={isPayingOut}>
        <DialogTitle>Pay Out</DialogTitle>
        <PayOutForm
          member={member}
          onClose={() => setPayingOut(false)}
          rewards={rewards}
        />
      </Dialog>
    </>
  )
}
