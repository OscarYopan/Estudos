import { useState } from "react";
import { data } from "./data";

const UseStateEx = () => {
  const [people, setPeople] = useState(data)
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      <h1>UseState Oject Example</h1>
    </div>
   )
};

export default UseStateEx;
