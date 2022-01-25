import {Col, Row, Tab, Tabs} from "react-bootstrap";
import CardSmallBootstrap from "../cards/CardSmallBootstrap";

export default function TabsBootstrap(props) {
    return <Tabs defaultActiveKey="01" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="01" title="Home">
            <Row>
                <Col>
                    <CardSmallBootstrap/>
                </Col>
                <Col>
                    <CardSmallBootstrap/>
                </Col>
                <Col>
                    <CardSmallBootstrap/>
                </Col>
            </Row>
        </Tab>
        <Tab eventKey="02" title="Jardinería">
            <div />
        </Tab>
        <Tab eventKey="03" title="Huerta urbana">
            <div />
        </Tab>
    </Tabs>
}