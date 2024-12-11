'use client'

import { Button, Dialog } from '@mui/material'
import { Sparkle } from '@phosphor-icons/react/Sparkle'
import { useState } from 'react'
import FamilyForm from './family-form'

export default function NewFamilyButton() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Button
        color="primary"
        endIcon={<Sparkle size={20} weight="fill" />}
        onClick={() => setOpen(true)}
      >
        Add family
      </Button>
      <Dialog disableRestoreFocus onClose={() => setOpen(false)} open={isOpen}>
        <FamilyForm
          onClose={() => setOpen(false)}
          redirectTo="/admin/families/:key"
        />
      </Dialog>
    </>
  )
}
