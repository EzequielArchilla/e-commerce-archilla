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
                        return <div className="cart-item" key={index}>
                            <div className="cart-item-data">
                                <p>Banda: {item.band}</p>
                                <p>Titulo: {item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className="cart-item-image">
                                <img src={item.pictureUrl} height="150"></img>
                            </div>
                            <br />
                            <button onClick={() => removeItem(item.id)}>Remover</button>
                        </div>
                    })}

                    <div className="cart-bottom">
                        <h4>Total: {totalPrice}</h4>
                        <br />
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