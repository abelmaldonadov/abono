import React, {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import {Container, Table} from "react-bootstrap";

function Cart(props) {
    const {products} = useContext(CartContext)

    return <div>
        <p className="text-muted text-center py-4">Carrito</p>

        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(item => <tr key={ item.code }>
                        <td>{ item.code }</td>
                        <td>{ item.name }</td>
                        <td>{ item.price }</td>
                        <td>{ item.numItems }</td>
                    </tr>)
                }
                </tbody>
            </Table>
        </Container>
    </div>
}

export default Cart