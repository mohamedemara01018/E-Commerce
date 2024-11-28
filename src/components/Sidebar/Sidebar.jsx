
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSidebarStatus, setSidebarOff } from '../../store/slices/sidebarSlice'
function Sidebar() {
    const dispatch = useDispatch()
    const sidebarStatus = useSelector(getSidebarStatus)
    
    return (
        <div className='sidebar' data-show={sidebarStatus ? true : false}>
            <div className='sidebar-head'>
                <h1>All Categories</h1>
                <i className='fas fa-times' onClick={() => dispatch(setSidebarOff())}></i>
            </div>
            <ul>
                <li><Link to={'/category/val'}>val</Link></li>
                <li><Link to={'/category/val'}>val</Link></li>
                <li><Link to={'/category/val'}>val</Link></li>
                <li><Link to={'/category/val'}>val</Link></li>
                <li><Link to={'/category/val'}>val</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar