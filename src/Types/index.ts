import { AppTypes } from './App';
import { TextTypes } from './Text';

// combine types
const TYPES = {
  ...AppTypes,
  ...TextTypes,
};

export { TYPES as default };
// console.log("TYPES: %o", TYPES);
