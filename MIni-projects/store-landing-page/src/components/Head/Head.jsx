import './head.css'

import { Cart } from '../Cart/Cart'

export const Head = () => {
  function displayOn () {
    //function to tutn on cart-menu
  }


  return (
    <div className="head-container">
      <div className='logo'>
        <a href="#">Shopping</a>
      </div>
      
      <div className='search-box'>
        <input type="text" name="search" id="search" placeholder='Search...'/>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className='account-container'>
        <div className='account'>
          <button className='btn'>
            <i className="fa-solid fa-user"></i>
          </button>
        </div>

        <div className='favorites'>
          <button className='btn'>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>

        <div className='buy-cart' id='buyCart'>
          <button className='btn' onClick={displayOn}> 
            <i className="fa-solid fa-cart-shopping"></i>
            <Cart />
          </button>
        </div>

      </div>
    </div>
  )
}
