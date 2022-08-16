import './cartScreen.css'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, RemoveFromCart } from '../redux/Actions/cartActions'

const CartScreen = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }
  const removeFromCart = (id) => {
    dispatch(RemoveFromCart(id))
  }
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qt) + qty, 0)
  }
  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qt + price, 0)
  }
  return (
    <div className="cartScreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
