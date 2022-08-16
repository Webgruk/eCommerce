import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

//actions
function addItem(d, qt) {
  return {
    type: actionTypes.Add_to_cart,
    payload: {
      product: d._id,
      name: d.name,
      imageUrl: d.imageUrl,
      price: d.price,
      countInStock: d.countInStock,
      qt,
    },
  }
}

function removeCart(ide) {
  return {
    type: actionTypes.Remove_from_Cart,
    payload: ide,
  }
}

// Dispatch

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  dispatch(addItem(data, qty))
  localStorage.setItem('items', JSON.stringify(getState().cart.cartItems))
}

export const RemoveFromCart = (id) => (dispatch, getState) => {
  dispatch(removeCart(id))
  localStorage.setItem('items', JSON.stringify(getState().cart.cartItems))
}
