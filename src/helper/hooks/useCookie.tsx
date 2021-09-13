import { useState } from 'react';

/*
 * General utils for managing cookies in Typescript.
 */
export function setCookie(name: string, val: string): void {
  const date = new Date();
  const value = val;

  // Set it expire in 1 day
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

export function getCookie(name: string): string | undefined {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length === 2) {
    // @ts-ignore
    return parts.pop().split(';').shift();
  }
}

export function deleteCookie(name: string): void {
  const date = new Date();

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
}

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
