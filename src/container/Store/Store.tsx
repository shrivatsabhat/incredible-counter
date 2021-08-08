import React, { createContext } from "react";
import { _defaultData, _state } from "./_data";
import { DATA_TYPE, useCookie } from '@helper'

export type Value = boolean | number | string | string[] | number[] | CallableFunction | null
export type Key = DATA_TYPE

export const CenteralStore = createContext(_defaultData)

export const Provider: React.FC = ({ children }) => {
  const [data, setData] = useCookie('__CUSTOM_COUNTER__', _state)
  const store = (key: Key, value: Value) => {
    const _data = { ...data, [key]: value }
    setData(_data)
    return { state: _data[key] === value, payload: _data }
  }
  const _store = { data, store }
  return <CenteralStore.Provider value={_store}>{children}</CenteralStore.Provider>
}