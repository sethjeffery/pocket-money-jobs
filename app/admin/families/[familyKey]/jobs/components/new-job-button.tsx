'use client'

import { Member } from '@/app/store/members'
import { Button, Dialog, DialogTitle } from '@mui/material'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import JobForm from './job-form'

function NewJobButton({
  familyKey,
  members,
}: {
  familyKey: string
  members: Member[]
}) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
        variant="contained"
      >
        Add job
      </Button>
      <Dialog
        disableRestoreFocus
        fullWidth
        onClose={() => setOpen(false)}
        open={isOpen}
      >
        <DialogTitle>Add job</DialogTitle>
        <JobForm
          familyKey={familyKey}
          members={members}
          onClose={() => setOpen(false)}
        />
      </Dialog>
    </>
  )
}

export default NewJobButton
