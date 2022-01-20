import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (
        <div className="item">
            <p>Banda: {item.band}</p>
            <p>Nombre: {item.title}</p>
            <p>Price: ${item.price}</p>
            <img src={item.pictureUrl} height="250px"></img>
            <br />
            <Link to={`/item/${item.id}`}><button className="button-detail">Ver detalle</button></Link>
        </div>
    )
}

export default Item


/*

BAND
CATEGORY
PICTUREURL
PRICE
TITLE

*/