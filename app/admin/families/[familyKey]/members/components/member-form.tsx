'use client'

import { deleteMember, saveMember } from '@/app/actions/members'
import GenericForm from '@/app/admin/components/generic-form'
import { BLANK_MEMBER, Member } from '@/app/store/members'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MemberFormFields from './member-form-fields'

interface MemberFormProps {
  familyKey: string
  member?: Readonly<Member>
  onClose: () => void
  redirectTo?: string
}

export default function MemberForm({
  familyKey,
  member = BLANK_MEMBER,
  onClose,
  redirectTo,
}: MemberFormProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GenericForm
        deleteAction={(member) => deleteMember(familyKey, member)}
        model={member}
        onClose={onClose}
        redirectTo={redirectTo}
        saveAction={(member) => saveMember(familyKey, member)}
      >
        <MemberFormFields />
      </GenericForm>
    </LocalizationProvider>
  )
}
