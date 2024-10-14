import { kv } from '@vercel/kv'

export interface Model extends Record<string, unknown> {
  key: string
}

export const getAllModels = async <T extends Model>(
  namespace: string
): Promise<Readonly<T>[]> => {
  const keys = await kv.keys(`${namespace}:*`)
  const result = await Promise.all(
    keys.map((key) => getModel<T>(namespace, key.replace(`${namespace}:`, '')))
  )
  return result.filter((model) => model !== null)
}

export const getModel = <T extends Model>(namespace: string, key: string) =>
  kv.hgetall<T>(`${namespace}:${key}`) as Promise<Readonly<T> | null>

export const setModel = <T extends Model>(
  namespace: string,
  key: string,
  args: T
) => kv.hset(`${namespace}:${key}`, { ...args, key })

export const delModel = <T extends Model>(namespace: string, key: string) =>
  kv.del(`${namespace}:${key}`)
