import React, {useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { store } from '../redux/store'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteAll, deleteByName, numberOfCard, deleteByNameForecast } from '../redux/actions/actions'
import '../styles/cards.css'

function Cards() {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    let kelvinToCelcius = 273.15 ;
    
    const cities = useSelector(state => state.cities)

    const refresh = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        },500)
    }

    useEffect(() => {
        return () => {
            setShow(false);
        };
    }, []);

    store.subscribe(refresh)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(deleteByName(e.target.value))
        dispatch(deleteByNameForecast(e.target.value))
    }

    const handleClickForecast = (e) => {
        dispatch(numberOfCard(e.target.value))
        dispatch(deleteAll())
    }

    return (
        <div className='container_cards' style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {cities.length?
                cities.map((city, index) => {
                return (
                <Card className='card' key={index} style={{ 
                    width: '18rem', 
                    marginRight:'.5em', 
                    marginTop:'1em', 
                    marginBottom:'.5em', 
                    backgroundColor:'rgba(255, 255, 255, 0.700)', 
                    borderColor:'white'
                }}>
                <Card.Body>
                    <Card.Title style={{fontWeight:'bold'}}>{city.name}, {city.sys.country}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontWeight:'bold'}}>{city.weather[0].main}</Card.Subtitle>
                    <Card.Text style={{fontWeight:'bold'}}>{Math.ceil(city.main.temp - kelvinToCelcius)} &#8451;</Card.Text>
                    <Link to='/selectedCityForecast'><Button value={index} onClick={handleClickForecast}>Ver pronóstico</Button></Link>
                    <Button variant="outline-dark" value={city.name} onClick={handleClick} style={{marginLeft:'1em'}}>Eliminar</Button>
                </Card.Body>
                </Card>
                )}
                )
                :null
            }
        {show && null}
        </div>
    )
}

export default Cards

