import { useState } from "react";

const ErrorExample = () => {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }


  return (
    <div>
      <h2>{setCount}</h2>
      <button className="btn" type="button" onClick={handleClick(setCount)}>Incriese</button>
    </div>
   )
};

export default ErrorExample;
