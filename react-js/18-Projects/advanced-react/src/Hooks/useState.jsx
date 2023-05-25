import { useState } from "react";

const UseStateEx = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
     console.log('Times out');
     setValue((currentValue) => {
      return currentValue + 1
     })
    }, 3000);
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
