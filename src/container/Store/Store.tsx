import React, { createContext } from "react";
import { _defaultData, _storeData } from "./_data";

export const CenteralStore = createContext(_defaultData)

export const Provider: React.FC = ({ children }) => {
  return <CenteralStore.Provider value={_storeData()}>{children}</CenteralStore.Provider>
}