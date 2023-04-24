import { useState } from "react";

const UseStateEx = () => {
  const [name, setName] = useState('Oscar')
  const [age, setAge] = useState(36)
  const [hobby, setHobby] = useState('Playing Games')

  const displayPerson = () => {
    setName('Amanda')
    setAge(26)
    setHobby('Swiming on the beach')
  }
  return (
    <div>
      <h2>UseState Object Example</h2>
      <h4><strong>Who:</strong> {name}</h4>
      <h4><strong>Age:</strong> {age}</h4>
      <h4><strong>Hobby:</strong> {hobby}</h4>
      <button className="btn" onClick={displayPerson}>Next</button>
    </div>
   )
};

export default UseStateEx;
