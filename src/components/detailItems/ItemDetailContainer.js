import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const { id } = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(() => {

        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, id);

        getDoc(refDoc)
            .then((result) => {
                setProducto({ id: result.id, ...result.data() });
            })
            .catch((error) => console.log(error))
    }, [id])

    return (
        <>
            <h4 className="font-color-white">Producto seleccionado</h4>
            <div className="items-container">
                <ItemDetail item={producto} />
            </div>
        </>
    )
}

export default ItemDetailContainer