import { createContext, useContext, useState } from 'react'

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CustomProvider = ({ children }) => {

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        let array = cart.slice();

        if (isInCart(item.id)) {
            array.forEach((itemA) => {
                if (itemA.id === item.id) {
                    itemA.quantity += quantity;
                }
            })
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
        array.forEach((item) => {
            if (item.id === itemId) {
                array.pop(item);
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
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }

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