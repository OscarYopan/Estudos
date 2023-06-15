import './head.css'

export const Head = () => {
  return (
    <div className="head-container">
      <div className='logo'>
        <a href="#">FakeStore</a>
      </div>
      <div className='search-box'>
        <input type="text" name="search" id="serach" placeholder='Search...'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='account-container'>
        <div className='account'>
          <button className='btn'>
            <i className="fa-solid fa-user"></i>
            <span>Account</span>
          </button>
        </div>
        <div className='favorites'>
          <button className='btn'>
            <i className="fa-solid fa-heart"></i>
            <span>Favorites</span>
          </button>
        </div>
        <div className='buy-cart'>
          <button className='btn'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
