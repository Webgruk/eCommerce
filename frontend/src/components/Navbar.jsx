import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Furniture Shopping Cart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">Shop</Link>
        </li>
      </ul>
      {/* humburger menu */}
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
