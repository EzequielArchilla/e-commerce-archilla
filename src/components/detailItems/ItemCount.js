import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <div className="count">
            <p>Stock disponible: {stock}</p>
            <div className="number-picker">
                <button onClick={sumar}>
                    <span class="material-icons">add</span>
                </button>
                <p>Items: {cantidad}</p>
                <button onClick={restar}>
                    <span class="material-icons">remove</span>
                </button>
            </div>
            <button onClick={() => onAdd(cantidad)}>
                <span class="material-icons">add_shopping_cart</span>
            </button>
        </div>
    )
}

export default ItemCount