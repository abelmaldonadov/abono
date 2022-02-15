import React, {useContext, useState} from 'react'
import {Button, Col, Modal, Row} from "react-bootstrap";
import Counter from "../../counter/Counter";
import {CartContext} from "../../../context/CartContext";

function ModalBootstrap({ item }) {
    const { stock, name, description, price, pictureUrl } = item
    const {dispatchProducts} = useContext(CartContext)
    const [isModalShow, setIsModalShow] = useState(false)
    const [numItems, setNumItems] = useState(0)

    function minusItem() {
        (numItems > 0) && setNumItems(numItems-1)
    }
    function plusItem() {
        (numItems < stock) && setNumItems(numItems+1)
    }

    return <>
        <Button variant="success" onClick={() => setIsModalShow(true)}>
            Ver +
        </Button>

        <Modal
            show={ isModalShow }
            onHide={ () => setIsModalShow(false) }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    { name }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <p>{ description }</p>
                        <p className="fw-bold">Precio: ${ price }</p>
                        <p>Stock: { stock }</p>
                        <Counter
                            minusItem={ () => minusItem() }
                            plusItem={ () => plusItem() }
                            numItems={ numItems }
                        />
                    </Col>
                    <Col>
                        <img src={ pictureUrl } className="w-100" alt="..."/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer style={{justifyContent:'space-between'}}>
                <p className="text-muted">Subtotal: ${ numItems*price }</p>
                <Button
                    className="btn-success"
                    onClick={ () => dispatchProducts({type:'add', payload:{...item, numItems}}) }
                >
                    Agregar al carrito
                </Button>
            </Modal.Footer>
        </Modal>
    </>


}

export default ModalBootstrap