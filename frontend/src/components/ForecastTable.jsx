import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/esm/Spinner';
import Table from 'react-bootstrap/Table';
import NavBar from './NavBar';
import { getCurrent, getCurrentForecast } from '../redux/actions/actions';

function ForecastTable() {

    const dispatch = useDispatch()

    const currentLocationForecast = useSelector(state => state.currentCityForecast);

    let kelvinToCelcius = 273.15;

    useEffect(() => {
        dispatch(getCurrent())
        dispatch(getCurrentForecast())
    }, [dispatch]);

    return (
        <div>
        <NavBar showSearch={false}/>
        {currentLocationForecast?
            <>
            <h1>{currentLocationForecast.currentCityWeatherFiveDaysForecast.city.name} - Pronóstico 5 días</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Fecha / Hora</th>
                <th>Descripción</th>
                <th>Temperatura</th>
                <th>Temp Max</th>
                <th>Temp Min</th>
                <th>Humedad</th>
                </tr>
            </thead>
            <tbody>
                {currentLocationForecast.currentCityWeatherFiveDaysForecast.list.map((element, index) => {
                    return(
                        <tr key={index}>
                        <td style={{fontSize:'.8rem'}}>{element.dt_txt}</td>
                        <td style={{fontSize:'.8rem'}}>{element.weather[0].main}</td>
                        <td style={{fontSize:'.8rem'}}>{Math.ceil(element.main.temp - kelvinToCelcius)} &#8451;</td>
                        <td style={{fontSize:'.8rem'}}>{Math.ceil(element.main.temp_max - kelvinToCelcius)} &#8451;</td>
                        <td style={{fontSize:'.8rem'}}>{Math.ceil(element.main.temp_min - kelvinToCelcius)} &#8451;</td>
                        <td style={{fontSize:'.8rem'}}>{element.main.humidity}</td>
                        </tr>
                    )
                })
                }
            </tbody>
            </Table>  
            </> 
            :
            <Spinner animation="border" role="status" style={{marginTop:'20%'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </div>
    )
}

export default ForecastTable
