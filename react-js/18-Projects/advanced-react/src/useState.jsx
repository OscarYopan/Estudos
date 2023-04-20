import { useState } from "react";
import { data } from "./data";

const UseStateEx = () => {
  return (
    <div>
      <h1>UseState Array Exemple</h1>
      <ul>
        {data.map( list => {
          return (
            <div>
              <li key={list.id} {...list}>
                <h5>{list.name}</h5>
              </li>
              <button className="btn">Remove</button>
            </div>
          )
        })}
      </ul>
    </div>
   )
};

export default UseStateEx;
