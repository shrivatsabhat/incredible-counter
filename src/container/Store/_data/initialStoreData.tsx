import { Value, Key } from "../Store";

const state = {
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

export const _defaultData = {
  ...state,
  store: (key: Key, value: Value) => { return { state: true, payload: state } }
}