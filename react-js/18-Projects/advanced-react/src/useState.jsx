import { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    
  }
  console.log(useState());


  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick(setCount)}>Incriese</button>
    </div>
   )
};

export default UseStateEx;
