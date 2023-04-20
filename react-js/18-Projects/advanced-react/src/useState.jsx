import { useState } from "react";
import { data } from "./data";

const UseStateEx = () => {
  const [peaple, setPeople] = useState(data)
  
  function removeItem() {
    console.log('Remove Clicked');
  }

  const clearAllItems = () => {
    console.log('Clear All Clicked');
    setPeople([])
  }

  return (
    <div>
      <h1>UseState Array Exemple</h1>
      <ul>
        {data.map( person => {
          const { id, name } = person;
          return (
              <li key={id} style={{marginTop: '1rem'}}>
                <h5>{name}</h5>
                <button className="btn" onClick={removeItem}>Remove</button>
              </li>
          )
        })}
      </ul>
      <button className="btn" style={{marginTop: '2rem'}} onClick={clearAllItems}>
        Clear All Items
      </button>
    </div>
   )
};

export default UseStateEx;
