import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({ user }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text text-black">
                    <img src="/images/logo.png" width="30" height="25" className="d-inline-block align-text-top m-1" alt="Flower logo" />
                    Flower Paradise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-text">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        {user === null && <><Nav.Link className="nav-text" href="/auth/register"><img src='/images/register-icon-29.jpg' width="20" height="25" alt='Register Icon' /> Register</Nav.Link>
                            <Nav.Link className="nav-text" href="/auth/login"><img src='/images/login.png' width="29" height="25" alt='Login Icon' /> Login</Nav.Link></>}
                    </Nav>
                    {user !== null && <Navbar.Text className="nav-text">
                        Signed in as: {user.username}
                    </Navbar.Text>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;