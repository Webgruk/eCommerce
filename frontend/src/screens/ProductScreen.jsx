import './productScreen.css'

const ProductScreen = () => {
  return (
    <div className="productScreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="../images/chair.jpeg" alt="" />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p className="left__name">Price $499.99</p>
          <p>
            Desciption: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Similique veritatis cumque alias repellat dolores quaerat!
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
