import { useState } from "react";

const UseStateEx = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      return newState
    })
  }

  return (
    <div>
      <h2>UseState Gotcha</h2>
      <h4>{value}</h4>
      <button className="btn" onClick={handleClick}>Click</button>
    </div>
   )
};

export default UseStateEx;
