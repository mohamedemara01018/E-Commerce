import { useEffect } from 'react'
import ProductList from '../../components/product-list/ProductList'
import Title from '../../components/title/Title'
import './SearchPage.css'
import { fetchSearchProduct, getSearchProduct, getSearchProductStatus } from '../../store/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card_Empty from '../../components/cart-empty/Card_Empty'

function SearchPage() {



    const dispatch = useDispatch()
    const searchProduct = useSelector(getSearchProduct);
    const searchProductStatus = useSelector(getSearchProductStatus);
    const { searchTerm } = useParams();
    console.log(searchTerm)
    useEffect(() => {
        dispatch(fetchSearchProduct(searchTerm));
    }, [searchTerm, dispatch])
    console.log(searchProduct, searchProductStatus);
    return (
        <div className='search-product'>
            <div className="container">
                <div className="search-product-content">
                    <Title title={'search result'} />
                    {searchProduct.length ? <ProductList allproducts={searchProduct} /> : <Card_Empty message={'No Resalut For Search.'} />}
                </div>
            </div>
        </div>
    )
}

export default SearchPage