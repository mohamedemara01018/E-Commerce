
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSidebarStatus, setSidebarOff } from '../../store/slices/sidebarSlice'
import { fetchCategories, getCategoryState } from '../../store/slices/categorySlice'
import { useEffect } from 'react'
function Sidebar() {
    const dispatch = useDispatch()
    const sidebarStatus = useSelector(getSidebarStatus)
    const category = useSelector(getCategoryState);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])
    return (
        <div className='sidebar' data-show={sidebarStatus ? true : false}>
            <div className='sidebar-head'>
                <h1>All Categories</h1>
                <i className='fas fa-times' onClick={() => dispatch(setSidebarOff())}></i>
            </div>
            <ul>
                {
                    category && category.categories && category.categories.map((cat) => {
                        return <li key={cat.name}>
                            {/* when onclick, the sidebar will be closed */}
                            <Link onClick={() => dispatch(setSidebarOff())} to={`/category/${cat.name.replace(' ', '')}`}>{cat.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar