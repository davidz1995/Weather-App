import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import {resetAlert} from '../redux/actions/actions'

function Alert(message) {
    const dispatch = useDispatch()
 
    const handleClick = () => {
        dispatch(resetAlert())
    }

    return (
        <div>
        {message.show&& 
        <div style={{
                    width:'20%',
                    position: 'absolute',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex:3, 
                    backgroundColor:'white',
                    top:'3.5em',
                    padding:'1em',
                    borderRadius:'5px',
                    fontSize:'1.2rem'
                    }}>
            <p>{message.message}</p>
            <Button onClick={handleClick}>OK</Button>
            </div>
        }  
        </div>
    )
}

export default Alert
