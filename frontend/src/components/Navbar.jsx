import { Link } from 'react-router-dom'
import './navbar'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN shopping Cart</h2>
      </div>
      {/* links */}
      <div className="navbar__links">
        <li>
          <Link to="/cart">
            {/* Icon */}
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">Shop</Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar
