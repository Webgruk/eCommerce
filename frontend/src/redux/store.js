import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import {
  getProductDetailReducer,
  getProductsReducer,
} from './reducers/productReducer'

const reducer = combineReducers({
  cart: cartReducer,
  allProducts: getProductsReducer,
  productDetail: getProductDetailReducer,
})

const middleware = [thunk]

const cartFromStorages = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromStorages,
  },
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
