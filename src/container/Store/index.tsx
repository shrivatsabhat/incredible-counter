import { CenteralStore } from './Store'
import { useContext } from 'react'

export const useStore = () => {
  const context = useContext(CenteralStore)
  if (context === undefined) throw new Error('No data Stored')
  return context
}

export * from './Store'