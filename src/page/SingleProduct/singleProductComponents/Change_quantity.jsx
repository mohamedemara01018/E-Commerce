/* eslint-disable react/prop-types */


function Change_quantity({ quantity, decrement, increment, appearH1 = true }) {
    return (
        <div className="quantity">
            {appearH1 && <h3>Quantity: </h3>}
            <div className="change-quantity">
                <button onClick={() => decrement()}>
                    <i className='fas fa-minus'></i>
                </button>
                <div className="number-quantity">{quantity}</div>
                <button onClick={() => increment()}>
                    <i className='fas fa-plus'></i>
                </button>
            </div>

        </div>
    )
}

export default Change_quantity