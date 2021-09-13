import { CenteralStore } from './Store';
import { useContext } from 'react';
import { _hardStore, _state, _store } from './_data';

/**
 *
 * @returns array of context,store, masterStore
 */
export const useStore = (): [
  typeof _state,
  typeof _store,
  typeof _hardStore
] => {
  const { data: context, store } = useContext(CenteralStore);
  if (context === undefined) throw new Error('No data Stored');
  return [context, store.normal, store.hard];
};

export * from './Store';
export * from './_data';
