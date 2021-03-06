import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../redux/store'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import background from '../assets/background.jpg';
import { getCurrent, getCurrentForecast } from '../redux/actions/actions';
//Componentes
import Icons from './Icons';
import Alert from './Alert';
import NavBar from './NavBar';
import Cards from './Cards';

function CurrentLocation() {

    const dispatch = useDispatch()

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

    useEffect(() => {
        dispatch(getCurrent())
        dispatch(getCurrentForecast())
        return () => {
            setShow(false);
            setShowAlert(true)
        };
    }, [dispatch]);

    return (
        <div>
            <NavBar showSearch={true}/>
            {alertMessage.length? 
                <Alert message={alertMessage[0].message} show={showAlert}/>
                :null
            }
            <Cards/>
            {currentLocation.locationData?
            <Carousel>
            <Carousel.Item id='currentCity'>
                <img
                className="d-block w-100"
                src={background}
                style={{height:'95vh'}}
                alt="background"
                />
                
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
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background}
                style={{height:'95vh'}}
                alt="background"
                />
                <Carousel.Caption style={{fontSize:'1.3rem'}}>
                <h1>{currentLocation.locationData.city}</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <p>Viento: {currentLocation.currentCityWeather.wind.speed}</p>
                    <p>Sensaci??n t??rmica: {Math.ceil(currentLocation.currentCityWeather.main.feels_like - kelvinToCelcius)} &#8451;</p>
                    <p>Presi??n: {currentLocation.currentCityWeather.main.pressure} Pa</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            :
            <Spinner animation="border" role="status" style={{marginTop:'20%'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
            {show && null}
        </div>
    )
}

export default CurrentLocation
