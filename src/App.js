import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes/Routes";
import {useEffect, useState} from "react";
import {CartContextComponent} from "./context/CartContext";

export default function App() {
    const [products, setProducts] = useState([])

    const getInventory = async () => {
        try {
            const response = await fetch('/api/inventory.json')
            const data = await response.json()
            setProducts(data.inventory)
            console.log(products)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getInventory()
        }, 1000)
    }, [])

    return <CartContextComponent>
        <Routes products={products}></Routes>
    </CartContextComponent>
}
