'use client'

import { Button, Dialog } from '@mui/material'
import { Ticket } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import RewardTypeForm from './reward-type-form'

export default function NewJobTypeButton({ familyKey }: { familyKey: string }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        endIcon={<Ticket size={20} weight="fill" />}
        onClick={() => setOpen(true)}
      >
        New reward type
      </Button>
      <Dialog
        disableRestoreFocus
        onClose={() => setOpen(false)}
        open={isOpen}
        fullWidth
      >
        <RewardTypeForm familyKey={familyKey} onClose={() => setOpen(false)} />
      </Dialog>
    </>
  )
}
