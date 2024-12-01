import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../components/product-list/ProductList'
import Title from '../../components/title/Title'
import './CategoryProductPage.css'
import { useEffect } from 'react';
import { fetchCategoryProduct, getCategoryProduct, getCategoryProductStatus } from '../../store/slices/categoryProductSlice';
import { useParams } from 'react-router-dom';
import { STATUS } from '../../utils/status';
import { ScaleLoader } from 'react-spinners';

function CategoryProductPage() {
    const dispatch = useDispatch();
    const { category } = useParams()
    const product = useSelector(getCategoryProduct);
    const productStatus = useSelector(getCategoryProductStatus)
    useEffect(() => {
        dispatch(fetchCategoryProduct(category));
    }, [dispatch, category]);



    return (
        <div className='catergory-product'>
            <div className="container">
                {
                    productStatus == STATUS.LOADING ?
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}> <ScaleLoader /></div>
                        :
                        <div className="catergory-product-content"><Title title={category} />
                            <ProductList allproducts={product} />
                        </div>
                }
            </div>
        </div>
    )
}

export default CategoryProductPage