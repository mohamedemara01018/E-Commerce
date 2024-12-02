import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchSingleProduct, getSingleProduct, getSingleProductStatus } from "../../store/slices/productSlice";
import { useEffect, useState } from "react";
import './SingleProduct.css'
import { ScaleLoader } from "react-spinners";
import { STATUS } from "../../utils/status";
import Description from "./singleProductComponents/Description";
import Price_and_offer from "./singleProductComponents/Price_and_offer";
import Change_quantity from "./singleProductComponents/Change_quantity";
import Btns from "./singleProductComponents/Btns";
import Img_thumb from "./singleProductComponents/Img_thumb";
import { addToCard } from "../../store/slices/cartSlice";


function SingleProduct() {
    const dispatch = useDispatch();
    let product = useSelector(getSingleProduct);
    const productStatus = useSelector(getSingleProductStatus)
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);




    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch, id]);

    function increment() {
        return setQuantity(
            (prev) => {
                if (prev < product.stock) {
                    prev += 1
                }
                return prev
            }
        )
    }

    function decrement() {
        return setQuantity(
            (prev) => {
                if (prev > 1) {
                    prev -= 1
                }
                return prev
            }
        )
    }

    function addToCart(item) {
        const discountPrice = (item.price - (item.price * (item.discountPercentage) / 100)).toFixed(2);
        const totalPrice = (discountPrice * quantity).toFixed(2);
        dispatch(addToCard({ ...item, totalPrice: totalPrice, discountPrice: discountPrice, quantity: quantity }))
    }
    return (

        <main>
            <div className="container">
                {
                    productStatus == STATUS.LOADING ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}> <ScaleLoader /></div >
                        : <div className="single-product">
                            <div className="single-product-content">
                                <div className="single-product-l">
                                    <div className="single-product-img-zoom">
                                        <img src={product ? product?.images ? product.images[0] : null : null} alt="" width={300} loading="lazy" />
                                    </div>
                                    <Img_thumb product={product} />
                                </div>
                                <div className="single-product-r">
                                    <h2>{product.title}</h2>
                                    <Description product={product} />
                                    <Price_and_offer product={product} />
                                    <Change_quantity quantity={quantity} decrement={decrement} increment={increment} />
                                    {(product?.stock === 0) ? <div>out of stock</div> : ""}
                                    <Btns addToCart={() => addToCart(product)} />
                                </div>
                            </div>
                        </div>
                }

            </div>
        </main >
    )
}

export default SingleProduct