import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCarts } from "../../store/slices/cartSlice"
import Card_Empty from "../cart-empty/Card_Empty"

function Cartmodel() {
  const carts = useSelector(getCarts)
  if (carts.length <= 0) {
    return <div className="cart-model">
      <Card_Empty />
    </div>
  }
  return (
    <div className="cart-model">
      <h1>Recently Added Products</h1>
      <div className="product-list-added">
        {
          carts.map((product) => {
            return <div key={product.id} className="product-list-added-content">
              <div className="img-title">
                <div className="img-cover">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="title-added">
                  {product.title}
                </div>
              </div>
              <div className="price">
                ${product.discountPrice.toFixed(2)}
              </div>
            </div>
          })
        }

      </div>
      <div className="btn">
        <Link to={'/cart'}>
          View My Shopping Cart
        </Link>
      </div>
    </div>
  )
}

export default Cartmodel