import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TabsBootstrap from "../bootstrap/tabs/TabsBootstrap";
import CardLargeBootstrap from "../bootstrap/cards/CardLargeBootstrap";

export default class Grid extends React.Component {
    render() {
        const {inventory} = this.props
        return <Container fluid="md" className="mt-5">
            <Row>
                <Col>
                    <TabsBootstrap inventory={inventory}/>
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <CardLargeBootstrap/>
                </Col>
            </Row>
        </Container>
    }
}