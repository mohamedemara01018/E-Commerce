import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="header-container-bottom-l">
                <button>
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
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
                            <li>dkfdjfkdfj</li>
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
        </div>
    )
}

export default Navbar