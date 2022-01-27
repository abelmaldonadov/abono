import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBarBootstrap(props) {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Abono</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                {/*<Nav.Link href="#home">Inicio</Nav.Link>*/}
                {/*<Nav.Link href="#saved">Guardado</Nav.Link>*/}
                <Nav.Link href="#login">Ingresar</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}