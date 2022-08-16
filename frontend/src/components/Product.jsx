import './product.css'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, name, productId, description, price }) => {
  const descriptions = description
  return (
    <div className="product">
      <img src={imageUrl} alt="" />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">
          {descriptions.substring(0, 100)}.....
        </p>
        <p className="info__price">${price}</p>
        <Link to={`/Product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  )
}

export default Product
