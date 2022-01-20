import { useContexto } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp, updateDoc, doc, increment } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

    const { totalPrice, cart, removeItem, clear } = useContexto();

    const changeStock = () => {
        const productsCollection = collection(db, "products");

        cart.forEach((item) => {
            const refDoc = doc(productsCollection, item.id);
            console.log(refDoc);
            updateDoc(refDoc, {
                stock: increment(-item.quantity)
            })
                .then((result) => { })
                .catch((error) => console.log(error))
        });
    }

    const checkout = () => {
        const transactionCollection = collection(db, "transactions");
        addDoc(transactionCollection, {
            buyer: {
                name: "Ezequiel",
                lastName: "Archilla",
                email: "ezequiel.a.archilla@gmail.com"
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        })
            .then((resultado) => {
                changeStock();

                let message = "Compra finalizada!"
                toast.success(message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                console.log(error);
            })



        clear();
    }


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
                            <div className="cart-item-right">
                                <img src={item.pictureUrl} height="150"></img>
                                <button className="vertical-expand" onClick={() => removeItem(item.id)}>
                                    <span className="material-icons">delete</span>
                                </button>
                            </div>
                        </div>
                    })}

                    <div className="cart-bottom">
                        <h4>Total: {totalPrice}</h4>
                        <br />
                        <button className="button-transaction" role="button" onClick={checkout}><span className="text">Finalizar compra</span></button>
                        <button className="button-transaction" role="button" onClick={clear}><span className="text">Vaciar carrito</span></button>
                    </div>

                    <ToastContainer />
                </div>

                : <div><h4>No hay items en el carrito</h4>
                    <Link to="/">
                        <button>Agregar Productos</button>
                    </Link>
                    <ToastContainer />
                </div>
            }

        </div>
    )
}

export default Cart