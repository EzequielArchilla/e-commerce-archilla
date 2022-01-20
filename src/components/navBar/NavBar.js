import logo from '../../assets/logo1.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useContexto } from '../context/CartContext'

const NavBar = ({ links }) => {

    const { totalQuantity } = useContexto();


    return (
        <nav>
            <div className="nav-wrapper">
                <img className="brand-logo" src={logo} alt="logo" height="30"></img>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {totalQuantity > 0 ? <CartWidget /> : <></>}
                    {links.map((link) => { return <li key={link.id}><Link to={link.url}>{link.title}</Link></li> })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar