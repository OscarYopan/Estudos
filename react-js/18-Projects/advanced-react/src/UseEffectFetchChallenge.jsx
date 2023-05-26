import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

export const UseEffectFetchChallengeEx = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://exemplo.com/usuario')
    .then(T => T.json())
    .then(console.log)
  }, [])

  return (
    <div className='fetch-challenge'>
      <h1>UseEffect Fetch Challenge</h1>
    </div>
  )
}
