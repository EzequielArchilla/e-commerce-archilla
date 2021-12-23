import Item from './Item';

const ItemList = ({ items }) => {

    return (
        <ul className="ul-products" >
            {items.map((item, index) => { return <Item key={item.id} item={item} /> })}
        </ul>
    )
}

export default ItemList