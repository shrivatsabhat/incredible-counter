import React, { createContext, useState } from "react";
import { _defaultData } from "./_data";
import { TYPE, DATA_TYPE } from '@helper'

export type Value = boolean | number | string | string[] | number[] | CallableFunction | null
export type Key = DATA_TYPE

export const CenteralStore = createContext(_defaultData)

export const Provider: React.FC = ({ children }) => {
  const [data, setData] = useState(_defaultData)
  console.log(data);

  const store = (key: Key, value: Value) => {
    console.log(key, value, data);
    const _data = { ...data, [key]: value }
    setData(_data)
    console.log(_data[key]);

    return { state: _data[key] === value, payload: _data }
  }
  const _store = { ...data, store }
  return <CenteralStore.Provider value={_store}>{children}</CenteralStore.Provider>
}