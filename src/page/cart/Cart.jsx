import { useEffect } from "react"
import Change_quantity from "../SingleProduct/singleProductComponents/Change_quantity"
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteProduct, getCarts, getCartTotal, getTotalAmount, getTotalCount, toggleQuantity } from "../../store/slices/cartSlice";
import './Cart.css'
import Card_Empty from "../../components/cart-empty/Card_Empty";
function Cart() {
    const cart = useSelector(getCarts);
    const totalAmount = useSelector(getTotalAmount);
    const totalCount = useSelector(getTotalCount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart, dispatch])
    console.log(cart)
    if (totalCount <= 0) {
        return <Card_Empty />
    }

    function clearTheCart() {
        dispatch(clearCart())
    }

    function handledeleteProduct(id) {
        dispatch(deleteProduct(id))
    }
    function handleToggleQuantity(product) {
        dispatch(toggleQuantity(product))
    }
    return (
        <div className="cart">
            <div className="container">
                <div className="cart-content">
                    <div className="cart-content-top">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.N.</th>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart && cart.map((product, ind) => {
                                        return <tr key={product.id}>
                                            <td>{ind + 1}</td>
                                            <td>
                                                <div className="img-cover">
                                                    <img src={product.images[0]} />
                                                </div>
                                            </td>
                                            <td>{product.title}</td>
                                            <td>${product.discountPrice.toFixed(2)}</td>
                                            <td><Change_quantity decrement={() => handleToggleQuantity({ ...product, type: 'DEC' })} increment={() => handleToggleQuantity({ ...product, type: 'INC' })} quantity={product.quantity} appearH1={false} /></td>
                                            <td>${product.totalPrice.toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => handledeleteProduct(product.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="cart-content-bottom">

                        <button onClick={() => clearTheCart()}>
                            <i className="fa-solid fa-trash"></i>
                            <div>
                                CLEAR CART
                            </div>
                        </button>

                        <div className="total-price">
                            <div className="total">
                                Total({totalCount} Items): <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="btn">
                                <button>Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart