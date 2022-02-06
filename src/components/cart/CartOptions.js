import { useContexto } from "../context/CartContext"


const CartOptions = ({ checkout }) => {

    const { totalPrice, clear } = useContexto();

    return (
        <div className="cart-bottom">
            <h4>Total: ${totalPrice}</h4>
            <br />
            <button className="button-transaction" onClick={()=>checkout()}><span className="text">Finalizar compra</span></button>
            <button className="button-transaction" onClick={clear}><span className="text">Vaciar carrito</span></button>
        </div>
    )
}

export default CartOptions