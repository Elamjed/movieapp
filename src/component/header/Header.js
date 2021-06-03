import { Link } from 'react-router-dom'
import '../header/Header.css'
import logo from '../image/logo.png'
const Header = () => {
    return (
        <div className="navbar">
            
            
        <div className="logo">
            
           <img src={logo} className='pic'/>
        </div>
        <div className="liste">
            <ul>
                <li> <Link to="/">Home </Link></li>
                </ul>  
            </div>
       </div>
    )
}

export default Header
