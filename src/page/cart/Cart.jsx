import { useEffect, useState } from "react"
import Change_quantity from "../SingleProduct/singleProductComponents/Change_quantity"
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteProduct, getCarts, getCartTotal, getTotalAmount, getTotalCount } from "../../store/slices/cartSlice";
import './Cart.css'
import { shopping_cart } from "../../utils/image";
import { Link } from "react-router-dom";
function Cart() {
    const cart = useSelector(getCarts);
    const totalAmount = useSelector(getTotalAmount);
    const totalCount = useSelector(getTotalCount);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    console.log(cart)
    if (totalCount <= 0) {
        return <div className="cart-empty">
            <img src={shopping_cart} alt="" />
            <h3>Your shopping cart is empty.</h3>
            <Link to={'/'}>
                Go Shopping Now
            </Link>
        </div>
    }

    function decrement() {
        setQuantity((prev) => {
            if (quantity > 1) {
                prev = prev - 1
            }
            return prev
        }
        )
    }
    function increment() {
        setQuantity(
            (prev) => {
                prev = prev + 1
                return prev
            }
        )
    }
    function clearTheCart() {
        dispatch(clearCart())
    }

    function handledeleteProduct(id) {
        dispatch(deleteProduct(id))
    }
    console.log(quantity);
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
                                            <td>${product.discountPrice}</td>
                                            <td><Change_quantity decrement={() => decrement()} increment={() => increment()} quantity={product.quantity} appearH1={false} /></td>
                                            <td>${product.totalPrice}</td>
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
                                Total({totalCount} Items): <span>${totalAmount}</span>
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