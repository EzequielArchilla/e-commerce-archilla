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
            title: "Rock",
            url: "/categoria/rock"
        },
        {
            id: 3,
            title: "Pop",
            url: "/categoria/pop"
        }
    ]

    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar links={links} />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/categoria/:category" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App