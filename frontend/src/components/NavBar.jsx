import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addCity } from '../redux/actions/actions'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar() {

    const [city, setCity] = useState('')

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addCity(city));
        setCity('')
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href='/'>Ciudad actual</Nav.Link>
                <Nav.Link href='/forecast'>Predicción (5 días)</Nav.Link>
            </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="City..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={handleClick}>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar