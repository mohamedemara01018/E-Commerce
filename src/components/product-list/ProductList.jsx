/* eslint-disable react/prop-types */

import Product from "./Product"
import './Product-list.css'

function ProductList({ allproducts }) {

    return (
        <div className="product-list">
            {
                allproducts && allproducts.map((product) => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default ProductList