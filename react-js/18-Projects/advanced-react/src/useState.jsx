import { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count} times</h2>
      <button className="btn" type="button" onClick={handleClick}>Incriese</button>
    </div>
   )
};

export default UseStateEx;
