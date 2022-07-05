import { getDocs, query, collection, where } from 'firebase/firestore';
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase';
import ItemList from './ItemList';


const ItemListContainer = ({ greeting }) => {

    const { category } = useParams();
    const [list, setLista] = useState([]);

    useEffect(() => {
        setLista([]);
        let customQuery;

        if(category){
            customQuery = query(collection(db, "products"), where("category", "==", category))
        }else{
            customQuery = collection(db, "products");
        }

        getDocs(customQuery)
            .then(({ docs }) => {
            setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error);
                })
        
    }, [category])

    return (
        <>
            <h4 className="font-color-white">Productos</h4>
            <div className="items-container">
                {list.length > 0 ? <ItemList items={list} /> : <h5 className="font-color-white">Cargando...</h5>}
            </div>
        </>
    )
}

export default ItemListContainer