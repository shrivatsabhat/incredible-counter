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

/**
 *
 * @param _key {string} to which store data needs to update
 * @param _value {Value} data to be stored/updated
 * @returns state and the update store
 */
export const _store = (
  _key: Key,
  _value: Value
): { state: boolean; payload: typeof _state } => {
  return { state: true, payload: _state };
};

/**
 *  (not recommand to use)
 * @param data copy of store Data with updated value
 * @returns actual store with updated data
 */
export const _hardStore = (data: typeof _state): typeof data => {
  return { ...data };
};

/**
 * Default data
 */
export const _defaultData = {
  data: _state,
  store: { normal: _store, hard: _hardStore },
};
