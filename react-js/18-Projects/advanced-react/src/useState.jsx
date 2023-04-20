import { useState } from "react";
import { data } from "./data";

const UseStateEx = () => {
  const [people, setPeople] = useState(data)
  
  function removeItem() {
    console.log('Remove Clicked');
  }

  const clearAllItems = () => {
    console.log('Clear All Clicked');
    setPeople([])
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
   )
};

export default UseStateEx;
