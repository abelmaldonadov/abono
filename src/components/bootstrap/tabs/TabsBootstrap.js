import React from 'react'
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import CardSmallBootstrap from "../cards/CardSmallBootstrap"

export default class TabsBootstrap extends React.Component {
    render() {
        const {inventory} = this.props
        const listOutstanding = inventory.map(item => {
            if (item.stock < 5) {
                return <Col key={item.code}>
                    <CardSmallBootstrap item={item}/>
                </Col>
            }
        })
        const listCategory = category => inventory.map(item => {
            if (item.category === category) {
                return <Col key={item.code}>
                    <CardSmallBootstrap item={item}/>
                </Col>
            }
        })
        return <Tabs defaultActiveKey="01" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="01" title="Destacado">
                <Row>
                    {listOutstanding}
                </Row>
            </Tab>
            <Tab eventKey="02" title="Suculentas">
                <Row>
                    {listCategory('suculentas')}
                </Row>
            </Tab>
            <Tab eventKey="03" title="Cactus">
                <Row>
                    {listCategory('cactus')}
                </Row>
            </Tab>
            <Tab eventKey="04" title="Huerto Urbano">
                <Row>
                    {listCategory('huerto')}
                </Row>
            </Tab>
        </Tabs>
    }
}