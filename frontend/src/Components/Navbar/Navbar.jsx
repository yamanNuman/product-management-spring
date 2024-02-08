import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import springLogo from '../Assets/spring.png'
import './Navbar.css'

function ColorSchemesExample() {
    function logout() {
        window.localStorage.removeItem('accessToken');
        window.location.href = '/';
    }
    return (
        <>
            <Navbar className="custom-navbar">
                <Container>
                    <Navbar.Brand href="/welcome">
                        <img
                            src={springLogo}
                            width="50"
                            height="50"
                            alt="Spring Boot Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.linkedin.com/in/yamannuman/">Linkedin</Nav.Link>
                        <Nav.Link href="https://github.com/yamanNuman">Github</Nav.Link>
                    </Nav>
                    <Button onClick={logout} variant="secondary">Logout</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;