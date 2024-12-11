'use client'

import { Button, Dialog } from '@mui/material'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import JobTypeForm from './job-type-form'

export default function NewJobTypeButton({ familyKey }: { familyKey: string }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
      >
        New job type
      </Button>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <JobTypeForm familyKey={familyKey} onClose={() => setOpen(false)} />
      </Dialog>
    </>
  )
}
