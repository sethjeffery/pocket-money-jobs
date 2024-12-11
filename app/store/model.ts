import { kv } from '@vercel/kv'

export interface Model extends Record<string, unknown> {
  key: string
  updatedAt: string
}

type Key = string | string[]

const joinedKey = (key: Key, join = ':') =>
  Array.isArray(key) ? key.join(join) : key

export const getAllModels = async <T extends Model>(namespace: string[]) => {
  const keys = await kv.keys(joinedKey([...namespace, '*']))
  const result = await Promise.all(keys.map(getModel<T>))
  return result.filter((model) => model !== null)
}

export const getModel = <T extends Model>(key: Key) =>
  kv.hgetall<Readonly<T>>(joinedKey(key))

export const setModel = <T extends Model>(key: Key, args: T): Readonly<T> => {
  const data: T = {
    ...args,
    updatedAt: new Date().toISOString(),
  }
  kv.hset(joinedKey(key), data)
  return data
}

export const delModel = (key: string | string[]) => kv.del(joinedKey(key))
