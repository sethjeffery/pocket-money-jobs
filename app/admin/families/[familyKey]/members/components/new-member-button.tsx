'use client'

import { Button, Dialog } from '@mui/material'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import MemberForm from './member-form'

export default function NewMemberButton({ familyKey }: { familyKey: string }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
      >
        New family member
      </Button>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <MemberForm familyKey={familyKey} onClose={() => setOpen(false)} />
      </Dialog>
    </>
  )
}
