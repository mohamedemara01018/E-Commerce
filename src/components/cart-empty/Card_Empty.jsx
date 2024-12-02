
import './Card_Empty.css'
import { shopping_cart } from '../../utils/image'
import { Link } from 'react-router-dom'
function Card_Empty() {
    return (
        <div className="cart-empty">
            <img src={shopping_cart} alt="" />
            <h3>Your shopping cart is empty.</h3>
            <Link to={'/'}>
                Go Shopping Now
            </Link>
        </div>
    )
}

export default Card_Empty