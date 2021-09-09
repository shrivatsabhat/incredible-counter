import React, { createContext } from 'react';
import { _defaultData, _state } from './_data';
import { DATA_TYPE, KEYS, useCookie } from '@helper';

export type Value =
  | boolean
  | number
  | string
  | string[]
  | number[]
  | CallableFunction
  | null
  | typeof _state.range;

export type Key = DATA_TYPE;

export const CenteralStore = createContext(_defaultData);

export const Provider: React.FC = props => {
  const [data, setData] = useCookie(KEYS.key_data, _state);
  const store = (key: Key, value: Value) => {
    const _data = { ...data, [key]: value };
    setData(_data);
    return { state: _data[key] === value, payload: _data };
  };
  const resetStore = (data?: typeof _state) => {
    setData(data || _state);
    return { ...(data || _state) };
  };
  const _store = { data, store: { normal: store, hard: resetStore } };
  return (
    <CenteralStore.Provider value={_store}>
      {props.children}
    </CenteralStore.Provider>
  );
};
