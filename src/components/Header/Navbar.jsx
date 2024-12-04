import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSidebarOn } from "../../store/slices/sidebarSlice"
import { fetchCategories, getCategoryState } from "../../store/slices/categorySlice"
import { useEffect, useRef, useState } from "react"
import { STATUS } from "../../utils/status"
import { getCarts, getCartTotal, getTotalCount } from "../../store/slices/cartSlice"
import Cartmodel from "../cart-model/Cartmodel"
import { getProductTitle, setProductTitle } from "../../store/slices/productSlice"

function Navbar() {
    const dispatch = useDispatch()
    const category = useSelector(getCategoryState);
    const totalCount = useSelector(getTotalCount);
    const cart = useSelector(getCarts)
    const productTitle = useSelector(getProductTitle);
    const [search, setSearch] = useState('')
    useEffect(() => {
        dispatch(setProductTitle(search.toString()))
    }, [search, dispatch])
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])
    useEffect(() => {
        dispatch(getCartTotal())
    }, [totalCount, dispatch, cart])

    let refLink = useRef(null)
    function handleClick(event) {
        if (event.key === 'Enter' && refLink.current) {
            refLink.current.click()
            setSearch('')
        };
    }
    return (
        <nav className='navbar'>
            <div className="header-container-bottom-l">
                <button onClick={() => dispatch(setSidebarOn())}>
                    <i className="fa-solid fa-list"></i>
                </button>
                <Link to={'/'}>
                    <span className='bag'>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </span>
                    <div>
                        <span className='snap'>snap</span>up.
                    </div>
                </Link>
            </div>
            <div className="header-container-bottom-m">
                <div className='middle-container'>
                    <div className="input-container">
                        <input type="text" placeholder='Search here' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => handleClick(e)} />
                        <div className="auto-complete" data-show={productTitle.length > 0 ? true : false}>
                            <ul>
                                {
                                    productTitle.map((product) => {
                                        return <li key={product.id} onClick={() => setSearch('')}>
                                            <Link className="link" to={`/search/${product.title}`}>
                                                {product.title}
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <Link ref={refLink} to={(search.length > 0) ? `/search/${search}` : null}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </div>

                    <div className="category">
                        <ul>
                            {
                                category.categoryStatus == STATUS.LOADING || category.categoryStatus == STATUS.IDLE ? <li>...........................</li>
                                    : category && category.categories && category.categories.slice(0, 8).map((cat, ind) => {
                                        return <li key={ind}>
                                            <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                                        </li>
                                    })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-container-bottom-r">
                <Link to={'/cart'}>
                    <span>{totalCount}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Cartmodel />
            </div>
        </nav>
    )
}

export default Navbar