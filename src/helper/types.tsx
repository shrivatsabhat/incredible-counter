export enum KEYS {
  key_data = "__CUSTOM_COUNTER__",
}

export enum DATA_TYPE {
  COUNTER = "counter",
  RESET = "reset",
  RANGE = "range",
  OPTION = "option",
  AUTO_COUNTER = "autoCounter",
  COUNTER_TYPE = "counterType",
  DELAY = "delay",
}

export enum STORE {
  STORE_DATA = "store",
}

export enum COUNTER_TYPE {
  INC = "increment",
  DEC = "decrement",
}

export const TYPE = {
  DATA: {
    COUNTER: DATA_TYPE.COUNTER,
    RESET: DATA_TYPE.RESET,
    RANGE: DATA_TYPE.RANGE,
    OPTION: DATA_TYPE.OPTION,
    AUTO_COUNTER: DATA_TYPE.AUTO_COUNTER,
    COUNTER_TYPE: DATA_TYPE.COUNTER_TYPE,
    DELAY: DATA_TYPE.DELAY,
  },
  STORE: STORE.STORE_DATA,
};
