
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <Link to='/'>privacy policy</Link>
                <Link to='/'>team of servce</Link>
                <Link to='/'>about snapup.</Link>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 shopee. all rights reserved.
                </div>
            </div>
            )
}

            export default Footer