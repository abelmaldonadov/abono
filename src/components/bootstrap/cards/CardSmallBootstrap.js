import {Button, Card} from "react-bootstrap";
import NewSection from "./new-section.jpg"

export default function CardSmallBootstrap(props) {
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={NewSection} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="success">Ver +</Button>
        </Card.Body>
    </Card>
}