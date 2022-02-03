import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap";
import TabsBootstrap from "../bootstrap/tabs/TabsBootstrap";

export default function Grid({setLoading}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getInventory()
        }, 2000)
    }, []);

    const getInventory = async () => {
        try {
            const response = await fetch('/api/inventory.json')
            const data = await response.json()
            console.log(products)
            setProducts(data.inventory)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return <Container fluid="md" className="mt-5">
        <TabsBootstrap inventory={products}/>
    </Container>
}