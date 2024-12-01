/* eslint-disable react/prop-types */


function Price_and_offer({ product }) {
    return (
        <div className="price-offer">
            <div className="old-price">
                <span>{product.price}</span> (Inclusive of all taxes)
            </div>
            <div className="new-price">
                <span>${product.discountPrice.toFixed(2)}</span>
                <div className="offer">
                    {product.discountPercentage}% OFF
                </div>
            </div>
        </div>
    )
}

export default Price_and_offer