import { Value, Key } from "../Store";

export const _state = {
  counter: 0,
  reset: false,
  range: 1,
  option: false,
  autoCounter: false,
  stopAtZero: true,
  customStop: 0,
  autoCounterType: 'increment',
  defaultCounter: 'increment'
}

export const _store = (key: Key, value: Value) => { return { state: true, payload: _state } }

export const _defaultData = {
  data: _state,
  store: _store
}