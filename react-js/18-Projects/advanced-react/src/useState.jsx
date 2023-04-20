import { useState } from "react";
import data from './data'

const UseStateEx = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.map( list => {
          return (
            <li key={list.id}>{list.name}</li>
          )
        })}
      </ul>
    </div>
   )
};

export default UseStateEx;
