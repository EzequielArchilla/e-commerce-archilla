import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({ item }) => {

    const stock = 5;
    const initial = 0;
    var itemCountDisable = true;

    const [show, setShow] = useState(true);

    function onAdd(numero) {
        if (stock > 0) {
            let message = "Se agregaron " + numero + " items al carrito."
            toast.success(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setShow(false);
    }


    if (show) {
        return (
            <div className="item">
                <p>Nombre: {item.title}</p>
                <p>Descripcion: {item.description}</p>
                <p>Precio: {item.price}</p>
                <img src={item.pictureUrl} alt="productImage" height="300px"></img>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            </div>
        )
    }
    else {
        return (
            <div className="item">
                <p>Nombre: {item.title}</p>
                <p>Descripcion: {item.description}</p>
                <p>Precio: {item.price}</p>
                <img src={item.pictureUrl} alt="productImage" height="300px"></img>
                <ToastContainer />
            </div>
        )
    }


}

export default ItemDetail