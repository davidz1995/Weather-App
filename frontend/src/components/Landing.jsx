import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { getCurrent, getCurrentForecast } from '../redux/actions/actions';
import '../styles/landing.css'

function Landing() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrent())
        dispatch(getCurrentForecast())
    },[dispatch])

    return (
        <div className='landing'>
            <h1 style={{marginTop:'18%', color:'white', fontSize:'4rem'}}>Bienvenido</h1>
            <Link to='/current'><Button style={{marginTop:'8%'}}>Entrar</Button></Link>
        </div>
    )
}

export default Landing
