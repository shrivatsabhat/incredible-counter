import { Value, Key } from '../Store';
import { COUNTER_TYPE } from '@helper';

export const _state = {
  counter: 0,
  reset: false,
  range: { min: 1000, max: 6000, step: 1000 },
  option: false,
  autoCounter: false,
  counterType: COUNTER_TYPE.INC,
  delay: 1000,
};

export const _store = (key: Key, value: Value) => {
  return { state: true, payload: _state };
};

export const _hardStore = (data: typeof _state) => {
  return { ...data };
};

export const _defaultData = {
  data: _state,
  store: { normal: _store, hard: _hardStore },
};
