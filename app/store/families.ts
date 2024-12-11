import { delModel, getAllModels, getModel, Model, setModel } from './model'

export interface Family extends Model {
  name: string
}

const NAMESPACE = 'families'

export const BLANK_FAMILY = Object.freeze<Family>({
  key: '',
  name: '',
  updatedAt: new Date().toISOString(),
})

export const getAllFamilies = () => getAllModels<Family>([NAMESPACE])

export const getFamily = async (key: string) =>
  (await getModel<Family>([NAMESPACE, key])) ?? BLANK_FAMILY

export const setFamily = (key: string, args: Family) =>
  setModel<Family>([NAMESPACE, key], { ...args, key })

export const delFamily = (key: string) => delModel([NAMESPACE, key])
