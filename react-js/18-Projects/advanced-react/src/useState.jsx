import { useState } from "react";
import { people } from "./data";

const UseStateEx = () => {
  const [name, setName] = useState('Oscar')
  const [age, setAge] = useState(36)
  const [hobby, setHobby] = useState('Gaming')

  return (
    <div>
      <h2>UseState Object Example</h2>
    </div>
   )
};

export default UseStateEx;
