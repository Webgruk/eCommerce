import * as actionTypes from '../constants/productConstant'

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        error: '',
      }
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: '',
      }
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        loading: false,
        products: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const getProductDetailReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
      }
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      }
    case actionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
