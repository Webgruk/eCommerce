import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './navbar.css'
const Navbar = ({ click = (fn) => fn() }) => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qt), 0)
  }

  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Furniture Shopping System</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/* humburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
