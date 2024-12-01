import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchSingleProduct, getSingleProduct } from "../../store/slices/productSlice";
import { useEffect } from "react";


function SingleProduct() {
    const { id } = useParams();
    console.log(id)

    const dispatch = useDispatch();
    let product = useSelector(getSingleProduct);
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch, id]);
    const discountPrice = product.price - (product.price * (product.discountPercentage) / 100).toFixed(2);
    product = { ...product, discountPrice };
    console.log(product)
    return (
        <main>
            <div className="container">
                <div className="single-product">
                    <div className="single-product-l">
                        <div className="single-product-img">
                            <div className="single-product-img-zoom">
                                <img src={product ? product?.images : ''} alt="" width={50} />
                            </div>
                            <div className="single-product-img-thumb">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct