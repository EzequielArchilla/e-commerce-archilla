import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (
        <div className="item">
            <p>Nombre: {item.title}</p>
            <p>Price: {item.price}</p>
            <Link to={`/item/${item.id}`}><button>Ver detalle</button></Link>
        </div>
    )
}

export default Item