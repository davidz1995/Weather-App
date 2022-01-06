import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background from '../assets/background.jpg';
import { store } from '../redux/store'
import { useSelector } from 'react-redux';
import { getCurrent } from '../redux/actions/actions';

function CurrentLocation() {

    useEffect(() => {
        getCurrent()
    }, [])

    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={background}
                style={{height:'90vh'}}
                alt="background"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CurrentLocation
