import { getDocs, query, collection, where } from 'firebase/firestore';
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase';
import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {

    var stock = 5;
    var initial = 1;
    const { category } = useParams();

    var filteredProducts = [];

    const [list, setLista] = useState([]);
    console.log(list);

    useEffect(() => {
        setLista([]);

        const productsCollection = collection(db, "products");

        if (category) {
            const customQuery = query(productsCollection, where("category", "==", category))

            getDocs(customQuery)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            getDocs(productsCollection)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [category])

    return (<>
        <h4>Productos</h4>
        <div className="items-container">
            {list.length > 0 ? <ItemList items={list} /> : <h5>Cargando...</h5>}
        </div>
    </>
    )
}

export default ItemListContainer