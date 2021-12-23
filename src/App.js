import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/listaItems/ItemListContainer"
import ItemDetailContainer from "./components/detailItems/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        },
        {
            id: 4,
            title: "Repo",
            url: "https://github.com/EzequielArchilla/e-commerce-archilla"
        }
    ]

    return (
        <BrowserRouter>
            <NavBar links={links} />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App