import React, { useState } from 'react'

export const UseEffectEx = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello Budy');
  }
  sayHello()

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
}
