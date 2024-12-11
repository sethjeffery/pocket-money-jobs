import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Account extends Model {
  createdAt: string
  email: string
}

const NAMESPACE = 'accounts'

export const BLANK_ACCOUNT = Object.freeze<Account>({
  createdAt: new Date().toISOString(),
  key: '',
  email: '',
  updatedAt: new Date().toISOString(),
})

export const getAllAccounts = () => getAllModels<Account>([NAMESPACE])

export const getAccount = async (key: string) =>
  (await getModel<Account>([NAMESPACE, key])) ?? BLANK_ACCOUNT

export const setAccount = (key: string, args: Account) =>
  setModel<Account>([NAMESPACE, key], { ...args, key })

export const delAccount = (key: string) => delModel([NAMESPACE, key])
