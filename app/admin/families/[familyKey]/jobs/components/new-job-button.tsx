'use client'

import { Button, Dialog } from '@mui/material'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import JobForm from './job-form'

function NewJobButton({ familyKey }: { familyKey: string }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
      >
        Add job
      </Button>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <JobForm familyKey={familyKey} onClose={() => setOpen(false)} />
      </Dialog>
    </>
  )
}

export default NewJobButton
