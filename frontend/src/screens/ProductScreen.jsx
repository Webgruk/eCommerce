import './productScreen.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Actions
import { getProductDetail } from '../redux/Actions/productAction'
import { addToCart } from '../redux/Actions/cartActions'

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const getProductDetails = useSelector((state) => state.productDetail)

  const { loading, error, product } = getProductDetails

  useEffect(() => {
    if (match.params.id !== product._id) {
      dispatch(getProductDetail(match.params.id))
    }
  }, [match, dispatch])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push('/cart')
  }
  return (
    <div className="productScreen">
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__name">{product.price}</p>
              <p>Desciption: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>{product.price}</span>
              </p>
              <p>
                Status:{' '}
                <span>
                  {product.countInStock > 0 ? 'In Stock !!' : 'out of store'}
                </span>
              </p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductScreen
