import React from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

function SearchedCityForecastTable() {

    const selectedCityForecast = useSelector(state => state.selectedForecast);
    const numberOfCard = useSelector(state => state.numberOfCard);

    let kelvinToCelcius = 273.15;

    return (
        <div>
        <NavBar showSearch={false}/>
        {selectedCityForecast.length?
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
                {selectedCityForecast[+numberOfCard].list.map((element, index) => {
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
            :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </div>
    )
}

export default SearchedCityForecastTable
