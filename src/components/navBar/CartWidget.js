import { Link } from 'react-router-dom'
import { useContexto } from '../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContexto()

    return <><Link to="/cart" className="material-icons">shopping_cart</Link><span>{totalQuantity}</span></>
}

export default CartWidget