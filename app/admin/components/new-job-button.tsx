'use client'

import { Button, Modal, ModalDialog } from '@mui/joy'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import JobForm from './job-form'

function NewJobButton() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endDecorator={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
        size="lg"
        variant="solid"
      >
        Add job
      </Button>
      <Modal disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <ModalDialog minWidth="sm" variant="outlined">
          <JobForm onClose={() => setOpen(false)} />
        </ModalDialog>
      </Modal>
    </>
  )
}

export default NewJobButton
