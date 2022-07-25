import './product.css'
import { Link } from 'react-router-dom'
// import { Chair } from '../../public/images/chair.jpeg'

const Product = () => {
  return (
    <div className="product">
      <img src="images/chair.jpeg" alt="" />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          natus enim quae quos officiis numquam.
        </p>
        <p className="info__price">$499.999</p>
        <Link to={`/Product/${1111}`} className="info__button">
          {' '}
          View
        </Link>
      </div>
    </div>
  )
}

export default Product
