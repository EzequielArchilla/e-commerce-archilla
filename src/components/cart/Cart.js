import { useContexto } from "../context/CartContext"
import { useEffect, useState } from "react";
import Item from "../listaItems/Item";
import { Link } from "react-router-dom";

const Cart = () => {

    const { totalPrice, cart, removeItem, clear } = useContexto();


    return (
        <div>
            <h3>Carro</h3>
            {cart.length > 0 ?
                <div>
                    {cart.map((item, index) => {
                        return <div className="item" key={index}>
                            <p>Nombre: {item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                            <img src={item.pictureUrl} height="250"></img>
                            <button onClick={() => removeItem(item.id)}>Remover</button>
                        </div>
                    })}

                    <div className="cart-bottom">
                        <h4>Total: {totalPrice}</h4>
                        <button onClick={clear}>Vaciar carrito</button>
                    </div>
                </div>

                : <div><h4>No hay items en el carrito</h4>
                    <Link to="/">
                        <button>Agregar Productos</button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Cart