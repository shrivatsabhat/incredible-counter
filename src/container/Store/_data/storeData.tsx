import { _defaultData } from './initialStoreData'
import { useState } from 'react'

type Value = boolean | number | string | string[] | number[] | CallableFunction | null

export const _storeData = (key?: string, value?: Value) => {
  const [data, setData] = useState(_defaultData)
  if (key !== undefined && value !== undefined) {
    setData({ ...data, [key]: value })
  }
  return { ...data }
}