/* eslint-disable react/prop-types */


function Btns({ addToCart }) {
    return (
        <div className="btns">
            <button className="add-to-cart" onClick={addToCart}>
                <i className='fas fa-shopping-cart'></i>
                <span>Add To Cart</span>
            </button>
            <button className="buy">
                Buy Now
            </button>
        </div>
    )
}

export default Btns