import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Abono</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Guardado</Nav.Link>
                    <NavDropdown title="Tienda" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Favoritos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Lista de deseos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Mis compras</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Pagar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}