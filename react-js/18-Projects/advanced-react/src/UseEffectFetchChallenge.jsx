import React, {useState, useEffect} from 'react'

export const UseEffectFetchChallengeEx = () => {
  const url = 'https://api.github.com/users';

  const fetchApi = () => {
    const data = url.map()
    console.log(data);
  }

  fetchApi()

  return (
    <div className='fetch-challenge'>
      <h1>UseEffect Fetch Challenge</h1>
    </div>
  )
}
