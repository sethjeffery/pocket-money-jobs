'use client'

import { IconButton, Modal, ModalDialog } from '@mui/joy'
import { Pencil } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { Job } from '../../store/jobs'
import JobForm from './job-form'

function JobActions({ job }: { job: Job }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)} title="Edit">
        <Pencil />
      </IconButton>
      <Modal disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <ModalDialog minWidth="sm" variant="outlined">
          <JobForm job={job} onClose={() => setOpen(false)} />
        </ModalDialog>
      </Modal>
    </>
  )
}

export default JobActions
