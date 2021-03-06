import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { addCity, deleteAll, getCityForecast, deleteAllForecast } from '../redux/actions/actions';
//Componentes
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar(props) {

    const [city, setCity] = useState('')
    const [showSearch, setShowSearch] = useState(props.showSearch)

    const dispatch = useDispatch()
    const cities = useSelector(state => state.cities)

    const handleClickSearch = useCallback((e) => {
        if(cities.length < 5){
            dispatch(addCity(city))
            dispatch(getCityForecast(city))
            setCity('')
            setShowSearch(true)
        } else {
            alert('Puedes buscar máximo 5 ciudades.')
        }
    },[cities.length, city, dispatch])

    const handleClickForecast = () => {
        dispatch(deleteAll())
        dispatch(deleteAllForecast())
    }

    //Permite usar tecla enter para buscar
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
                <Link to='/current' onClick={handleClickForecast} style={{
                    textDecoration:'none',
                    color:'black',
                    marginTop:'.2em',
                    marginLeft:'1em',
                    fontSize:'1.3rem'
                }}>Weather App</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to='/current' onClick={handleClickForecast} style={{
                    textDecoration:'none',
                    color:'grey',
                    marginTop:'.5em',
                    marginLeft:'1em'
                }}>Ciudad actual</Link>
                <Link to='/forecast' onClick={handleClickForecast} style={{
                    textDecoration:'none',
                    color:'grey',
                    marginTop:'.5em',
                    marginLeft:'1em'
                }}>
                Pronóstico ciudad actual (5 días)
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
