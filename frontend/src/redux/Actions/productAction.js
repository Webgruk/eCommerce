import * as actionTypes from '../constants/productConstant'
import axios from 'axios'

//action creator for all products

function getProductsRequest() {
  return {
    type: actionTypes.GET_PRODUCTS_REQUEST,
  }
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: data,
  }
}

function getErrorMessage(error) {
  return {
    type: actionTypes.GET_PRODUCT_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  }
}

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsRequest())
    const { data } = await axios.get('/api/products')
    dispatch(getProductsSuccess(data))
  } catch (error) {
    dispatch(getErrorMessage(error))
  }
}

//////////////////// action creators  for individual products

function getProductDetailRequest() {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_REQUEST,
  }
}
function getProductDetailSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
    payload: data,
  }
}

function getErrorDetailMessage(error) {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  }
}

function reset() {
  return {
    type: actionTypes.GET_PRODUCT_DETAIL_REQUEST,
  }
}
export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch(getProductDetailRequest())
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch(getProductDetailSuccess(data))
  } catch (error) {
    dispatch(getErrorDetailMessage(error))
  }
}

export const resetDefault = () => (dispatch) => {
  dispatch(reset())
}
