/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


function Product({ product }) {

    const disCountPrice = product.price - (product.price - (product.price * product.discountPercentage / 100))
    product = { ...product, disCountPrice };
    // console.log(product);
    return (
        <Link to={`/product/${product.id}`}>
            <div className="img">
                <img src={product.images[0]} alt="" loading="lazy" />
                <h2 className="category">
                    {product.category}
                </h2>
            </div>
            <div className="product-info">
                <h1 className="brand"><span>Brand:</span>{product.brand || 'unkown'}</h1>
                <p className="product-title">{product.title}</p>
                <div className="price">
                    <p className="old-price">${product.price}</p>
                    <p className="new-price">${product.disCountPrice.toFixed(2)}</p>
                    <p className="offer">({product.discountPercentage}% off)</p>
                </div>
                <div className="line">

                </div>
            </div>
        </Link>
    )
}

export default Product