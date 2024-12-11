'use server'

import { delFamily, Family, setFamily } from '../store/families'
import newKey from '../store/new-key'

export async function saveFamily(family: Family) {
  return setFamily(family.key || (await newKey()), family)
}

export async function deleteFamily(family: Family) {
  await delFamily(family.key)
}
