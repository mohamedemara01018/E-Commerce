/* eslint-disable react/prop-types */


function Description({ product }) {
    return (
        <div className="desc">
            <p>{product.description}</p>
            <div className="r-b-c">
                <div className="r-b-c-item">
                    <span>Rating: </span>{product.rating}
                </div>
                <div className="r-b-c-item">
                    <span>Brand: </span>{product.brand}
                </div>
                <div className="r-b-c-item">
                    <span>Category: </span>{product.category}
                </div>
            </div>
        </div>
    )
}

export default Description