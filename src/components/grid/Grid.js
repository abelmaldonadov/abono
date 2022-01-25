import {Col, Container, Row} from "react-bootstrap";
import TabsBootstrap from "../bootstrap/tabs/TabsBootstrap";
import CardLargeBootstrap from "../bootstrap/cards/CardLargeBootstrap";

export default function Grid(props) {
    return <Container fluid="md" className="mt-5">
        <Row>
            <Col>
                <TabsBootstrap/>
            </Col>
        </Row>
        <Row className="my-5">
            <Col>
                <CardLargeBootstrap/>
            </Col>
        </Row>
    </Container>
}