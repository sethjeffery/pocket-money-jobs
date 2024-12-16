'use client'

import { Button, Dialog } from '@mui/material'
import { Person } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import MemberForm from './member-form'

export default function NewMemberButton({ familyKey }: { familyKey: string }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Person size={20} weight="fill" />}
        onClick={() => setOpen(true)}
        variant="contained"
      >
        New family member
      </Button>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <MemberForm familyKey={familyKey} onClose={() => setOpen(false)} />
      </Dialog>
    </>
  )
}
