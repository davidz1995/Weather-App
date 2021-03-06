import { GET_CURRENT, GET_CURRENT_FORECAST, ADD_CITY, DELETE_CITY, DELETE_ALL, RESET_ALERT, SET_ALERT, GET_SELECTED_FORECAST, SET_INDEX_CARD, DELETE_ALL_FORECAST, DELETE_CITY_FORECAST} from "./actionTypes";
import axios from "axios";

export const getCurrent = () => {
    return async (dispatch) => {
      try{
        const response = await axios.get(`http://localhost:4000/v1/current`)
        if(response.status === 200) dispatch({type: GET_CURRENT, payload: response.data})
      }catch(error){
        let message = [{name: 'Not found'}]
        dispatch({type: GET_CURRENT, payload: message})
      }
    }
  }

export const getCurrentForecast = () => {
    return async (dispatch) => {
      try{
        const response = await axios.get(`http://localhost:4000/v1/forecast`)
        if(response.status === 200) dispatch({type: GET_CURRENT_FORECAST, payload: response.data})
      }catch(error){
        let message = [{name: 'Not found'}]
        dispatch({type: GET_CURRENT_FORECAST, payload: message})
      }
    }
}

export const addCity = (name) => {
    return async (dispatch) => {
      if (name) {
        try{
          const response = await axios.get(`http://localhost:4000/v1/current/${name}`)
          if(response.status === 200) dispatch({type: ADD_CITY, payload: response.data})
        } catch (error){
          let message = [{message: 'Ciudad no encontrada'}]
          dispatch({type: SET_ALERT, payload: message})
        } 
      }
    }
  }

export const deleteByName = (name) => {
    return async (dispatch) => {
        if (name) {
        dispatch({type: DELETE_CITY, payload:name})
        } 
    }
}

export const deleteAll = () => {
  return async (dispatch) => {
      dispatch({type: DELETE_ALL, payload:[]})
  }
}

export const resetAlert = () => {
  return async (dispatch) => {
      dispatch({type: RESET_ALERT, payload:[]})
  }
}

export const getCityForecast = (name) => {
  return async (dispatch) => {
    if (name) {
      try{
        const response = await axios.get(`http://localhost:4000/v1/forecast/${name}`)
        if(response.status === 200) dispatch({type: GET_SELECTED_FORECAST, payload: response.data})
      } catch (error){
        return
      } 
    }
  }
}

export const numberOfCard = (number) => {
  return async (dispatch) => {
    if (number) {
        dispatch({type: SET_INDEX_CARD, payload: number})
    }
  }
}

export const deleteAllForecast = () => {
  return async (dispatch) => {
      dispatch({type: DELETE_ALL_FORECAST, payload:[]})
  }
}

export const deleteByNameForecast = (name) => {
  return async (dispatch) => {
      if (name) {
      dispatch({type: DELETE_CITY_FORECAST, payload:name})
      } 
  }
}


