import { CenteralStore } from './Store'
import { useContext } from 'react'
import { _state, _store } from './_data'

export const useStore = (): [typeof _state, typeof _store] => {
  const { data: context, store } = useContext(CenteralStore)
  if (context === undefined) throw new Error('No data Stored')
  return [context, store]
}

export * from './Store'