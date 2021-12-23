import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const restar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="container">
            <p>Stock disponible: {stock}</p>
            <p>Items: {cantidad}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => onAdd(cantidad)}>Agregar</button>
        </div>
    )
}

export default ItemCount