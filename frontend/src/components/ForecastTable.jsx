import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function ForecastTable() {

    const currentLocationForecast = useSelector(state => state.currentCityForecast);

    let kelvinToCelcius = 273.15;

    return (
        <div>
        {currentLocationForecast &&
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
        }
        </div>
    )
}

export default ForecastTable
