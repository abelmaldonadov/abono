import React from 'react'
import {Button, Col, Modal, Row} from "react-bootstrap";
import Counter from "../../counter/Counter";

export default class ModalBootstrap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            numItems: 0
        }
        this.minusItem = this.minusItem.bind(this)
        this.plusItem = this.plusItem.bind(this)
        this.setModalShow = this.setModalShow.bind(this)
        this.setModalHide = this.setModalHide.bind(this)
    }
    minusItem(e) {
        const numItems = this.state.numItems
        if (numItems > 0) {
            this.setState(prevState => ({
                numItems: --prevState.numItems
            }))
        }
    }
    plusItem(e) {
        const stock = this.props.item.stock
        const numItems = this.state.numItems
        if (numItems < stock) {
            this.setState(prevState => ({
                numItems: ++prevState.numItems
            }))
        }
    }
    setModalShow(e) {
        this.setState({ modalShow: true })
    }
    setModalHide(e) {
        this.setState({ modalShow: false })
    }
    render() {
        const {modalShow, numItems} = this.state
        const {item} = this.props
        const {price, name, stock, pictureUrl} = item
        const subtotal = parseFloat(numItems * price).toFixed(2)
        return <>
            <Button variant="success" onClick={this.setModalShow}>
                Ver +
            </Button>

            <Modal
                show={modalShow}
                onHide={this.setModalHide}
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
                            <p>{ item.description }</p>
                            <p className="fw-bold">Precio: ${ price }</p>
                            <p>Stock: { stock }</p>
                            <Counter minusItem={this.minusItem} plusItem={this.plusItem} numItems={numItems} />
                        </Col>
                        <Col>
                            <img src={pictureUrl} className="w-100" alt="..."/>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer style={{justifyContent:'space-between'}}>
                    <p className="text-muted">Subtotal: ${ subtotal }</p>
                    <Button className="btn-success" onClick={ this.setModalHide }>Agregar al carrito</Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}