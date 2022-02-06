import { useContexto } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartOptions from "./CartOptions";
import { ToastContainer , toast} from "react-toastify";
import { useState } from "react";
import UserForm from "../form/UserForm";
import { addDoc, collection, serverTimestamp, updateDoc, doc, increment } from "firebase/firestore";
import { db } from '../firebase/firebase';


const Cart = () => {

    const {totalPrice, clear, cart, removeItem } = useContexto();

    const [order, setOrder] = useState("");
    const [buyer, setBuyer] = useState("");

    const changeStock = () => {
        const productsCollection = collection(db, "products");

        cart.forEach((item) => {
            const refDoc = doc(productsCollection, item.id);
            updateDoc(refDoc, {
                stock: increment(-item.quantity)
            })
                .then((result) => { })
                .catch((error) => console.log(error))
        });
    }

    const checkout = () => {
        if(buyer !== ""){
        const transactionCollection = collection(db, "transactions");
        addDoc(transactionCollection, {
            buyer: buyer,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        })
            .then((result) => {
                clear();
                changeStock();
                setOrder(result.id);
                let message = "Compra finalizada!"
                toast.success(message, {
                    position: "top-center",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                console.log(error);
            })
        }
        else{
            let message = "Complete los datos del comprador"
                toast.error(message, {
                    position: "top-center",
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
        }
    }

    return (
        <div>
            <h3 className="font-color-white">Carro</h3>
            {cart.length > 0 ?
                <div>
                    {cart.map((item, index) => {
                        return <div className="cart-item" key={index}>
                            <div className="cart-item-data">
                                <p>Banda: {item.band}</p>
                                <p>Titulo: {item.title}</p>
                                <p>Precio unitario: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                            </div>
                            <div className="cart-item-right">
                                <img src={item.pictureUrl} alt={index} height="150"></img>
                                <button className="vertical-expand" onClick={() => removeItem(item.id)}>
                                    <span className="material-icons">delete</span>
                                </button>
                            </div>
                        </div>
                    })}
                    <UserForm setBuyer={setBuyer}/>
                    <CartOptions checkout={checkout}/>
                    <ToastContainer />
                </div>

                : order === "" ?
                    <div><h4 className="font-color-white">No hay items en el carrito</h4>
                        <Link to="/">
                            <button className="button-detail">Agregar Productos</button>
                        </Link>
                        <ToastContainer />
                    </div>
                    :
                    <div>
                        <div className="order-message">
                            <span>Gracias por confiar en nosotros!</span>
                            <span>El codigo de su compra es: {order}</span>
                        </div>
                        <Link to="/">
                            <button className="button-detail">Realizar otra compra</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Cart