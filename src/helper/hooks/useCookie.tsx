// General utils for managing cookies in Typescript.
import { useState } from 'react';

/**
 * @function setCookie
 * @param name {string} key to name to which data tobe stored
 * @param val {string} data to be stored as cookie
 * @returns void
 */
export function setCookie(name: string, val: string): void {
  const date = new Date();
  const value = val;

  /**
   * Set it expire in 1 day
   * present time * days * hours * minutes * seconds * miliseconds
   */
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);

  // Set as cookie
  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

/**
 * @function getCookie
 * @param name {string} key of data to be retrived
 * @returns data if available
 */
export function getCookie(name: string): string | undefined {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length === 2) {
    // @ts-ignore
    return parts.pop().split(';').shift();
  }
}

/**
 * @function deleteCookie
 * @param name {string} key of data stored
 */
export function deleteCookie(name: string): void {
  const date = new Date();

  /**
   * Set it expire in -1 day
   * present time * days * hours * minutes * seconds * miliseconds
   */
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  // Update cookie
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}

/**
 * @function useCookie
 * @param keyName {string} key by which data to be stored
 * @param initialValue default value
 * @returns Array of vale, callback, callback
 */
export function useCookie<T>(
  keyName: string,
  initialValue: T
): [T, CallableFunction, CallableFunction] {
  const [state, setState] = useState(() => {
    // get stored
    const storedCookie = getCookie(keyName);
    const returnstoredCookie =
      storedCookie !== undefined ? JSON.parse(storedCookie) : storedCookie;
    return returnstoredCookie || initialValue;
  });

  function setPersistedState<T>(stateValue: T, key?: string): void {
    setCookie(key || keyName, JSON.stringify(stateValue));
    setState(stateValue);
  }

  function clearState(key: string): void {
    deleteCookie(key);
  }

  return [state, setPersistedState, clearState];
}
