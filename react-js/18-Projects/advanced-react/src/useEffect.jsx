import React, { useState, useEffect } from 'react'

export const UseEffectEx = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
}


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

Troubleshooting

    My Effect runs twice when the component mounts
    My Effect runs after every re-render
    My Effect keeps re-running in an infinite cycle
    My cleanup logic runs even though my component didn’t unmount
    My Effect does something visual, and I see a flicker before it runs 
*/