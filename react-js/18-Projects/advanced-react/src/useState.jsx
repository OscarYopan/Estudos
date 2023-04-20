import { useState } from "react";
import { data } from "./data";

const UseStateEx = () => {
  const [peaple, setPeaple] = useState(data)
  
  function removeItem() {

  }

  function clearAllItems() {
    
  }

  return (
    <div>
      <h1>UseState Array Exemple</h1>
      <ul>
        {data.map( list => {
          return (
              <li key={list.id} {...list}>
                <h5>{list.name}</h5>
                <button>Remove</button>
              </li>
          )
        })}
      </ul>
      <button className="btn">Clear All</button>
    </div>
   )
};

export default UseStateEx;
