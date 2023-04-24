import { useState } from "react";

const UseStateEx = () => {
  const [person, setPerson] = useState({
    name: 'Oscar',
    age: 36,
    hobby: 'Playing Games'
  })

  const displayPerson = () => {
    setPerson({
      name: 'Amanda', 
      age: 26, 
      hobby: 'Go to the beach.'
    })
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
