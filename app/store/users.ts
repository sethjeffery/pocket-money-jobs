import { getAllModels, getModel, Model, setModel } from './model'

export interface User extends Model {
  name: string
}

const NAMESPACE = 'users'

const BLANK_USER = Object.freeze<User>({
  key: '',
  name: '',
})

export const getAllUsers = () => getAllModels<User>(NAMESPACE)

export const getUser = async (key: string) =>
  (await getModel<User>(NAMESPACE, key)) ?? BLANK_USER

export const setUser = (key: string, args: User) =>
  setModel<User>(NAMESPACE, key, args)
