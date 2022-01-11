import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/listaItems/ItemListContainer"
import ItemDetailContainer from "./components/detailItems/ItemDetailContainer";
import CustomProvider from "./components/context/CartContext";
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from "./components/cart/Cart";

function App() {

    const links = [
        {
            id: 1,
            title: "Productos",
            url: "/"
        },
        {
            id: 2,
            title: "Black Tea",
            url: "/categoria/black_tea"
        },
        {
            id: 3,
            title: "Herbal Tea",
            url: "/categoria/herbal_tea"
        }
    ]

    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar links={links} />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App