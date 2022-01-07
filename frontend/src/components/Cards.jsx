import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { store } from '../redux/store'
//Icons
//import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import AcUnitIcon from '@mui/icons-material/AcUnit';
//import CloudIcon from '@mui/icons-material/Cloud';
//import GrainIcon from '@mui/icons-material/Grain';
//CSS
//import '../styles/cards.css'

function Cards() {

    const [show, setShow] = useState(false);
    let kelvinToCelcius = 273.15 ;
    
    const cities = useSelector(state => state.cities)

    const refresh = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        },500)
    }

    store.subscribe(refresh)

    return (
        <div className='container_cards' style={{backgroundColor:'transparent'}}>
            {cities.length && 
                cities.map((city, index) => {
                return (
                <div className='container_card' key={index}>
                    <div className='name_card'>
                        <p>{city.name}, {city.sys.country}</p>
                    </div>
                    <div className='subContainer_card'>
                        <div>
                            <p>{city.weather[0].main}</p>
                            <h1>{Math.ceil(city.main.temp-kelvinToCelcius)} &#8451;</h1>
                        </div>
                    </div>
                </div>
                )
            })
            }
        </div>

    )
}

export default Cards

