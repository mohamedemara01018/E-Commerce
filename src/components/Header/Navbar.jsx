import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSidebarOn } from "../../store/slices/sidebarSlice"
import { fetchCategories, getCategoryState } from "../../store/slices/categorySlice"
import { useEffect } from "react"
import { STATUS } from "../../utils/status"

function Navbar() {
    const dispatch = useDispatch()
    // return {categories: [], categoryStatue:'succeded'}
    const category = useSelector(getCategoryState);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])


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
                        <input type="text" placeholder='Search here' />
                        <Link to={`/Search`}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </div>

                    <div className="category">
                        <ul>
                            {
                                category.categoryStatus == STATUS.LOADING || category.categoryStatus == STATUS.IDLE ? <li>...........................</li>
                                    : category && category.categories && category.categories.slice(0, 8).map((cat, ind) => {
                                        return <li key={ind}>
                                            <Link to={`/category/${cat.name.replace(' ', '')}`}>{cat.name}</Link>
                                        </li>
                                    })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-container-bottom-r">
                <Link to={'/card'}>
                    <span>0</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar