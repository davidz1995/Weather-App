import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background from '../assets/background.jpg';
import { useSelector } from 'react-redux';
import { store } from '../redux/store'
import Icons from './Icons';
import Alert from './Alert';
import NavBar from './NavBar';

function CurrentLocation() {

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(true)

    const currentLocation = useSelector(state => state.currentCity);
    const alertMessage = useSelector(state => state.alert)
 
    let kelvinToCelcius = 273.15;

    const refresh = () => {
        setShow(true)
        if(alertMessage.length){
            setShowAlert(true)
        }
    }

    store.subscribe(refresh)

    return (
        <div>
            <NavBar showSearch={true}/>
            {alertMessage.length? 
                <Alert message={alertMessage[0].message} show={showAlert}/>
                :null
            }
            <Carousel>
            <Carousel.Item id='currentCity'>
                <img
                className="d-block w-100"
                src={background}
                style={{height:'91vh'}}
                alt="background"
                />
                {currentLocation && show &&
                <Carousel.Caption style={{fontSize:'1.3rem'}}>
                <h1>{currentLocation.locationData.city}</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <Icons props={currentLocation.currentCityWeather.weather[0].main}/>
                    <p style={{fontSize:'2.3rem', fontWeight:'bold'}}>{currentLocation.currentCityWeather.weather[0].main}</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <p>Temperatura: {Math.ceil(currentLocation.currentCityWeather.main.temp - kelvinToCelcius)} &#8451;</p>
                    <p>Max: {Math.ceil(currentLocation.currentCityWeather.main.temp_max - kelvinToCelcius)} &#8451;</p>
                    <p>Min: {Math.ceil(currentLocation.currentCityWeather.main.temp_min - kelvinToCelcius)} &#8451;</p>
                    <p>Humedad: {currentLocation.currentCityWeather.main.humidity}</p>
                </div>
                </Carousel.Caption>
                }
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background}
                style={{height:'90vh'}}
                alt="background"
                />
                {currentLocation && show &&
                <Carousel.Caption style={{fontSize:'1.3rem'}}>
                <h1>{currentLocation.locationData.city}</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <p>Viento: {currentLocation.currentCityWeather.wind.speed}</p>
                    <p>Sensación térmica: {Math.ceil(currentLocation.currentCityWeather.main.feels_like - kelvinToCelcius)} &#8451;</p>
                    <p>Presión: {currentLocation.currentCityWeather.main.pressure}</p>
                </div>
                </Carousel.Caption>
                }
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CurrentLocation
