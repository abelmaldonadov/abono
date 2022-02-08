import {Card, Col, Row} from "react-bootstrap";
import ModalBootstrap from "../modal/ModalBootstrap";

export default function CardBootstrap({item}) {
    return <Card>
        <Card.Img variant="top" src={ item.pictureUrl } />
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
}