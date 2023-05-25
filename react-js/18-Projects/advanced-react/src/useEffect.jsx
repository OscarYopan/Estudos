//https://react.dev/reference/react/useEffect

/*
Reference

    useEffect(setup, dependencies?) 

Usage

    Connecting to an external system
    Wrapping Effects in custom Hooks
    Controlling a non-React widget
    Fetching data with Effects
    Specifying reactive dependencies
    Updating state based on previous state from an Effect
    Removing unnecessary object dependencies
    Removing unnecessary function dependencies
    Reading the latest props and state from an Effect
    Displaying different content on the server and the client 
*/

import React, { useState, useEffect } from 'react'

export const UseEffectEx = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello Budy');
  }

  sayHello()

  useEffect(() => {
    console.log('Hello From useEffect');
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
}
