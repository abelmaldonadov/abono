import {Button, Card} from "react-bootstrap";
import NewSectionImg from "./new-section.jpg"

export default function CardLargeBootstrap(props) {
    return <Card className="text-center">
        <Card.Header>Abono</Card.Header>
        <Card.Body>
            <Card.Img className="w-50 mb-3" src={NewSectionImg}></Card.Img>
            <Card.Title>Descuentos especiales</Card.Title>
            <Card.Text>
                Descubre la nueva sección de jardinería y huerta urbana
            </Card.Text>
            <Button variant="success">Visitar</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Hace 2 días</Card.Footer>
    </Card>
}