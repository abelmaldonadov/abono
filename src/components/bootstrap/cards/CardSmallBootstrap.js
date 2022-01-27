import React from 'react'
import {Card, Col, Row} from "react-bootstrap";
import NewSection from "./new-section.jpg"
import ModalBootstrap from "../modal/ModalBootstrap";

export default class CardSmallBootstrap extends React.Component {
    render() {
        const {item} = this.props
        return <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ NewSection } />
                <Card.Body>
                    <Card.Title>{ item.name }</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Row>
                        <Col>
                            <ModalBootstrap item={item}/>
                        </Col>
                        <Col style={{ textAlign: 'right', paddingRight: '20px' }}>
                            <p className="text-success">${ item.price }</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    }
}