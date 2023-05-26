import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

export const UseEffectFetchChallengeEx = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await (response.json())
        console.log(users);
        setUsers(users)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <div className='fetch-challenge'>
      <h1>UseEffect Fetch Challenge</h1>
      <section>
        <h3>Github Users</h3>
      </section>
    </div>
  )
}
