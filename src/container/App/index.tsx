import React, { useContext } from 'react'
import { Button, Text, Card, Circle } from "@atoms"
import style from './App.module.scss';
import { CenteralStore, Provider, useStore } from '../Store';
import { TYPE } from '@helper';

export const App = () => {
  const Data = useContext(CenteralStore);
  const handleIncrement = () => {
    const c = Data.store(TYPE.DATA.COUNTER, Data.counter + 1)
    console.log('click', c);
  }
  const handleDecrement = () => Data.store(TYPE.DATA.COUNTER, Data.counter - 1)
  const resetCounter = () => Data.store(TYPE.DATA.COUNTER, 0)
  const toggleOption = () => Data.store(TYPE.DATA.OPTION, !Data.option)
  return (
    <Provider>
      <Card>
        <h1>{Data.counter}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={toggleOption}>Option</button>
      </Card>
      <Card>
        {Data.option && <h3>Option</h3>}
        <ul>
          <li>Stop at zero</li>
          <li>Toggle Button</li>
          <li>Reset</li>
          <li>Auto</li>
        </ul>
      </Card>
      <Card>
        <h3>Auto</h3>
        <Card>Increment/Decrement Toggle Button</Card>
        <Card>Counter Auto</Card>
      </Card>
    </Provider>
  )
}