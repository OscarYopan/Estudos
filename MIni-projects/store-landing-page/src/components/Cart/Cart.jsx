import './cart.css'
import cart01 from '../../assets/images/cart_img_01.png'

export const Cart = () => {
  return (
    <div className="cart-container">
      <li>
        <div className="cart">
          <img src={cart01} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Xiaomi Stick TV 4K</h2>
          <p className="price">$ 99.00</p>
        </div>
      </li>
      <li>
        <div className="cart"></div>
        <h2 className="title">Produt Name</h2>
        <p className="price">$ 1.99</p>
      </li>
      <li>
        <div className="cart"></div>
        <h2 className="title">Produt Name</h2>
        <p className="price">$ 1.99</p>
      </li>
    </div>
  )
}
