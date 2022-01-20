import Item from './Item';

const ItemList = ({ items }) => {

    return (
        <div className="div-products" >
            {items.map((item, index) => { return <Item key={item.id} item={item} /> })}
        </div>
    )
}

export default ItemList