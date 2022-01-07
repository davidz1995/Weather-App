import { GET_CURRENT, GET_CURRENT_FORECAST, ADD_CITY } from "./actionTypes";
import axios from "axios";

export const getCurrent = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:4000/v1/current`)
        let error = [{name: 'Not found'}]
        if(response.status === 200) dispatch({type: GET_CURRENT, payload: response.data})
        if(response.status === 404) dispatch({type: GET_CURRENT, payload: error})
    }
  }

export const getCurrentForecast = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:4000/v1/forecast`)
        let error = [{name: 'Not found'}]
        if(response.status === 200) dispatch({type: GET_CURRENT_FORECAST, payload: response.data})
        if(response.status === 404) dispatch({type: GET_CURRENT_FORECAST, payload: error})
    }
}

export const addCity = (name) => {
    return async (dispatch) => {
      if (name) {
        const response = await axios.get(`http://localhost:4000/v1/current/${name}`)
        let error = [{name: 'Not found'}]
        if(response.status === 200) dispatch({type: ADD_CITY, payload: response.data})
        if(response.status === 404) dispatch({type: ADD_CITY, payload: error})
      } 
    }
  }


