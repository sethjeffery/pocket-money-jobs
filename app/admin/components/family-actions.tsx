'use client'

import { Family } from '@/app/store/families'
import { Button, Dialog } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import FamilyForm from './family-form'

export default function FamilyActions({ family }: { family: Family }) {
  const [isEditing, setEditing] = useState(false)

  return (
    <>
      <Button LinkComponent={Link} href={`/admin/families/${family.key}`}>
        View
      </Button>
      <Button onClick={() => setEditing(true)}>Edit</Button>
      <Dialog
        disableRestoreFocus
        onClose={() => setEditing(false)}
        open={isEditing}
      >
        <FamilyForm family={family} onClose={() => setEditing(false)} />
      </Dialog>
    </>
  )
}
