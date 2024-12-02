/* eslint-disable react/prop-types */


function Img_thumb({ product }) {
    return (
        <div className="single-product-img-thumb">
            {
                product && product.images && product.images.slice(1, 5).map((img, ind) => {
                    return <div className="thumb-item" key={ind}>
                        <img src={img} alt="" loading="lazy" />
                    </div>
                })
            }
        </div>
    )
}

export default Img_thumb