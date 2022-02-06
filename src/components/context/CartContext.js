import { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({ children }) => {
    
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPriceFromLocalStorage = JSON.parse(localStorage.getItem('totalPrice')) || 0;
    const totalQuantityFromLocalStorage = JSON.parse(localStorage.getItem('totalQuantity')) || 0;

    const [totalQuantity, setTotalQuantity] = useState(totalQuantityFromLocalStorage);
    const [totalPrice, setTotalPrice] = useState(totalPriceFromLocalStorage);
    const [cart, setCart] = useState(cartFromLocalStorage)

    const addItem = (item, quantity) => {
        let array = cart.slice();

        if (isInCart(item.id)) {
            array.forEach((itemA) => {
                if (itemA.id === item.id) {
                    itemA.quantity += quantity;
                }
            })
            window.localStorage.setItem(item.id, JSON.stringify(item));
            setCart(array);
            setTotalQuantity(totalQuantity + quantity);
            setTotalPrice(totalPrice + (quantity * item.price));
        }
        else {
            array.push({ ...item, quantity: quantity });
            setCart(array);
            setTotalQuantity(totalQuantity + quantity);
            setTotalPrice(totalPrice + (quantity * item.price));
        }
    }

    const removeItem = (itemId) => {
        let array = cart.slice();
        array.forEach((item, index) => {
            if (item.id === itemId) {
                array.splice(index, 1);
                setTotalPrice(totalPrice - (item.price * item.quantity));
                setTotalQuantity(totalQuantity - item.quantity);
            }
        })
        setCart(array);
    }

    const clear = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotalPrice(0);
        localStorage.clear();
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
        localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
    },[cart]);

    const contextValue = {
        totalPrice,
        totalQuantity,
        cart,
        addItem,
        removeItem,
        clear
    }

    return <Provider value={contextValue}>
        {children}
    </Provider>
}

export default CustomProvider