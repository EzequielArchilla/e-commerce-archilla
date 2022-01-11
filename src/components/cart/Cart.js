import { useContexto } from "../context/CartContext"
import { useEffect, useState } from "react";
import Item from "../listaItems/Item";

const Cart = () => {

    const [total, setTotal] = useState(0)
    const { cart, removeItem, clear } = useContexto();

    const totalCalculation = () => {
        let sum = 0;
        cart.forEach((item) => {
            sum += (item.price * item.quantity)
        })
        setTotal(sum);
    }

    useEffect(() => {
        totalCalculation()
    }, [cart])

    return (<>
        <h3>Carro</h3>
        {cart.map((item, index) => {
            return <div className="item" key={index}>
                <p>Nombre: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <img src={item.pictureUrl} height="250"></img>
                <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
        })}
        <div className="cart-bottom">
            <h4>Total: {total}</h4>
            <button onClick={clear}>Vaciar carrito</button>
        </div>
    </>)
}

export default Cart