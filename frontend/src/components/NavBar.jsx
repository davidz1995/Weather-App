import React, {useState, useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCity, deleteAll } from '../redux/actions/actions'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function NavBar() {

    const [city, setCity] = useState('')
    const [showSearch, setShowSearch] = useState(true)

    const dispatch = useDispatch()
    const cities = useSelector(state => state.cities)

    const handleClickSearch = useCallback((e) => {
        if(cities.length < 5){
            dispatch(addCity(city))
            setCity('')
        } else {
            alert('Puedes buscar máximo 5 ciudades.')
        }
    },[cities.length, city, dispatch])

    const handleClickForecast = () => {
        setShowSearch(false);
        dispatch(deleteAll())
    }

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault()
            handleClickSearch()
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [handleClickSearch]);

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
                <Link to='/forecast' onClick={handleClickForecast} style={{
                    textDecoration:'none',
                    color:'grey',
                    marginTop:'.5em',
                    marginLeft:'1em'
                }}>
                Pronóstico (5 días)
                </Link>
            </Nav>
            {showSearch &&
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Ciudad..."
                    className="me-2"
                    value={city}
                    aria-label="Search"
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <Button 
                        variant="outline-success" 
                        onClick={handleClickSearch} 
                        id='searchButton'>Buscar</Button>
                </Form>
            }
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
