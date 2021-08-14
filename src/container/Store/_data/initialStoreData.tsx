import { Value, Key } from "../Store";
import { COUNTER_TYPE } from "@helper";

export const _state = {
  counter: 0,
  reset: false,
  range: 1,
  option: false,
  autoCounter: false,
  counterType: COUNTER_TYPE.INC,
};

export const _store = (key: Key, value: Value) => {
  return { state: true, payload: _state };
};

export const _defaultData = {
  data: _state,
  store: _store,
};
