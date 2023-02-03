import './style.css'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

export const Post = () => {
  const params = useParams()
  const {id} = params
  const [qs] = useSearchParams()
  console.log(qs);

  return (
    <div>
      <h1>Post{id}</h1>
      <div className='post'></div>
      < Outlet/>
    </div>
  )
}