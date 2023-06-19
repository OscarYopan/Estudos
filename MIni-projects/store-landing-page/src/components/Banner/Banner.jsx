// import { bannerImages } from '../Data/data'
import './banner.css'

export const Banner = () => {
  return (
    <div className='banner-container'>
      <button className='arrow'>
        <i className="fa-solid fa-left"></i>
      </button>
      <button className='arrow'>
        <i className="fa-solid fa-right"></i>
      </button>
    </div>
  )
}
