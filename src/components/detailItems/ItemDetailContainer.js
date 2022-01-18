import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const { id } = useParams();
    var filteredProducts = {};


    const [producto, setProducto] = useState([]);

    useEffect(() => {

        const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, id);

        getDoc(refDoc)
            .then((result) => {
                setProducto(result.data());
            })
            .catch((error) => console.log(error))
    }, [id])

    return (
        <div className="items-container">
            <h5>Producto </h5>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer