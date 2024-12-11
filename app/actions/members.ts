'use server'

import { delMember, Member, setMember } from '../store/members'
import newKey from '../store/new-key'

export async function saveMember(familyKey: string, member: Member) {
  return setMember(familyKey, member.key || (await newKey()), member)
}

export async function deleteMember(familyKey: string, member: Member) {
  await delMember(familyKey, member.key)
}
