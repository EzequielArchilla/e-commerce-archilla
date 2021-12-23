import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    var filteredProducts = {};

    const initialProducts = [
        {
            id: 1,
            title: 'Blue Lady Grey Tea',
            description: 'Black Tea - High Coffeine - Keto friendly',
            category: 'black_tea',
            price: 450,
            pictureUrl: '/images/productos/black_tea/Blue-Lady-Grey.jpg'
        },
        {
            id: 2,
            title: 'Simple Earl Grey Tea',
            description: 'Black Tea - High Coffeine - Sweet & Citrus',
            category: 'black_tea',
            price: 400,
            pictureUrl: '/images/productos/black_tea/Simple_Earl_Grey.jpg'
        },
        {
            id: 3,
            title: 'Honeyed Black Tea',
            description: 'Black Tea - High Coffeine - Sweet & Bold',
            category: 'black_tea',
            price: 520,
            pictureUrl: '/images/productos/black_tea/Honeyed-Black-Tea.jpg'
        },
        {
            id: 4,
            title: 'Simple Coconut Black',
            description: 'Black Tea - High Coffeine - Sweet & Rich',
            category: 'black_tea',
            price: 600,
            pictureUrl: '/images/productos/black_tea/Simple-Coconut-Black.jpg'
        },
        {
            id: 5,
            title: 'Midnight Rose Tea',
            description: 'Black Tea - High Coffeine - Flower Blend',
            category: 'black_tea',
            price: 500,
            pictureUrl: '/images/productos/black_tea/Midnight-Rose.jpg'
        },
        {
            id: 6,
            title: 'Irish Breakfast Tea',
            description: 'Black Tea - High Coffeine - Smooth & Rich',
            category: 'black_tea',
            price: 630,
            pictureUrl: '/images/productos/black_tea/Irish-Breakfast.jpg'
        },
        {
            id: 7,
            title: 'Bengal Tiger Chai Tea',
            description: 'Black Tea - High Coffeine - Spiced Flavor',
            category: 'black_tea',
            price: 630,
            pictureUrl: '/images/productos/black_tea/Bengal-Tigel-Chai.jpg'
        },
        {
            id: 8,
            title: 'Blood Orange Tea',
            description: 'Herbal Tea - Coffeine Free - Light & Earthy',
            category: 'herbal_tea',
            price: 550,
            pictureUrl: '/images/productos/herbal_tea/Blood-Orange.jpg'
        },
        {
            id: 9,
            title: 'Sweet Hibiscus Tea',
            description: 'Herbal Tea - Coffeine Free - Simple & Elegant',
            category: 'herbal_tea',
            price: 580,
            pictureUrl: '/images/productos/herbal_tea/Sweet-Hibiscus.jpg'
        },
        {
            id: 10,
            title: 'Lavender Raspberry Tea',
            description: 'Herbal Tea - Coffeine Free - Sweet & Fresh',
            category: 'herbal_tea',
            price: 630,
            pictureUrl: '/images/productos/herbal_tea/Lavender-Raspberry-Herbal.jpg'
        },
        {
            id: 11,
            title: 'Relaxing Herbal',
            description: 'Herbal Tea - Coffeine Free - Peppermint, Lavender and Chamomile',
            category: 'herbal_tea',
            price: 480,
            pictureUrl: '/images/productos/herbal_tea/RelaxingHerbal.jpg'
        },
        {
            id: 12,
            title: 'Aloha Herbal Tea',
            description: 'Herbal Tea - Coffeine Free - Strong & Sweet',
            category: 'herbal_tea',
            price: 520,
            pictureUrl: '/images/productos/herbal_tea/Aloha-Herbal.jpg'
        },
        {
            id: 13,
            title: 'Harvest Moon',
            description: 'Herbal Tea - Coffeine Free - Bold & Fun',
            category: 'herbal_tea',
            price: 540,
            pictureUrl: '/images/productos/herbal_tea/Harvest-Moon.jpg'
        },
        {
            id: 14,
            title: 'Banana Delight Tea',
            description: 'Herbal Tea - Coffeine Free - Fresh & Earthy',
            category: 'herbal_tea',
            price: 660,
            pictureUrl: '/images/productos/herbal_tea/Banana_Delight.jpg'
        },
        {
            id: 15,
            title: 'Apple Cinnamon',
            description: 'Herbal Tea - Coffeine Free - Spiced Flavor',
            category: 'herbal_tea',
            price: 580,
            pictureUrl: '/images/productos/herbal_tea/Apple_Cinnamon.jpg'
        }
    ]

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                initialProducts.forEach((item) => {
                    if (item.id.toString() == id) {
                        filteredProducts = item;
                    }
                })
                res(filteredProducts)
            }, 2000)
        });

        promesa.then((producto) => {
            setProducto(producto)
        });

    }, [id])

    return (
        <div className="items-container">
            <h5>Producto </h5>
            <ItemDetail item={producto} />
        </div>
    )
}

export default ItemDetailContainer