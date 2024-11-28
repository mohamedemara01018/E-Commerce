
import './Header.css'
import { header_top_left, header_top_right } from '../../data'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-container">
                    <div className="header-container-top">
                        <div className="header-container-top-l">
                            <ul>
                                {
                                    header_top_left.map((val) => {
                                        return <li key={val.id}>
                                            <Link to={val.title.replace(' ', '')} >{val.title}</Link>
                                        </li>

                                    })
                                }
                                <li>
                                    <a href='https://www.facebook.com/' target="_blank">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/' target="_blank">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>
                        <div className="header-container-top-r">
                            <ul>
                                {
                                    header_top_right.map((val) => {
                                        return <li key={val.id}>
                                            <Link to={val.title.replace(' ', '')}>
                                                {val.id == 1 && <i className='fa-solid fa-circle-question'></i>}
                                                {val.title}
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="header-container-bottom">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header