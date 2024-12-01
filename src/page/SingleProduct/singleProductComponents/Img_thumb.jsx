/* eslint-disable react/prop-types */


function Img_thumb({ product }) {
    return (
        <div className="single-product-img-thumb">
            {
                product ? (product.images ? <div className="thumb-item">
                    <img src={product ? (product.images ? product.images[1] : "") : ""} alt="" loading="lazy" />
                </div> : null) : null
            }
            {
                product ? (product.images ? <div className="thumb-item">
                    <img src={product ? (product.images ? product.images[2] : null) : null} alt="" loading="lazy" />
                </div> : null) : null
            }
            {
                product ? (product.images ? <div className="thumb-item">
                    <img src={product ? (product.images ? product.images[3] : "") : ""} alt="" loading="lazy" />
                </div> : null) : null
            }
            {
                product ? (product.images ? <div className="thumb-item">
                    <img src={product ? (product.images ? product.images[4] : "") : ""} alt="" loading="lazy" />
                </div> : null) : null
            }
        </div>
    )
}

export default Img_thumb