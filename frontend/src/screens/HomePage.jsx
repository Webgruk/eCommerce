import './homeScreen.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../components/Product'
import { getAllProducts } from '../redux/Actions/productAction'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  const productItem = useSelector((state) => state.allProducts)

  const { loading, products, error } = productItem

  return (
    <>
      <div className="homeScreen">
        <h2 className="homescreen__title">Latests Products</h2>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
