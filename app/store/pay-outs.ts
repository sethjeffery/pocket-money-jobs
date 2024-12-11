import { Reward } from '../types/reward'
import { Member } from './members'
import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface PayOut extends Model {
  actionedAt: string
  familyKey: string
  member?: Pick<Member, 'key' | 'name'>
  rewards: Reward[]
  totalAmount: number
}

const NAMESPACE = 'pay-outs'

export const BLANK_PAY_OUT = Object.freeze<PayOut>({
  actionedAt: new Date().toISOString(),
  familyKey: '',
  key: '',
  rewards: [],
  totalAmount: 0,
  updatedAt: new Date().toISOString(),
})

export const getAllPayOuts = (familyKey: string) =>
  getAllModels<PayOut>([NAMESPACE, familyKey])

export const getPayOut = async (familyKey: string, key: string) =>
  (await getModel<PayOut>([NAMESPACE, familyKey, key])) ?? BLANK_PAY_OUT

export const setPayOut = (familyKey: string, key: string, args: PayOut) =>
  setModel<PayOut>([NAMESPACE, familyKey, key], { ...args, familyKey, key })

export const delPayOut = (familyKey: string, key: string) =>
  delModel([NAMESPACE, familyKey, key])
