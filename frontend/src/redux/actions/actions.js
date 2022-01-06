import { GET_CURRENT } from "./actionTypes";
import axios from "axios";

/* export const getCurrent = (name) => {
  return async (dispatch) => {
    if (name) {
      const response = await axios.get(`${API_URL}${name}&appid=${API_KEY}`)
      let error = [{name: 'Not found'}]
      if(response.status === 200) dispatch({type: GET_BYNAME, payload: response.data})
      if(response.status === 404) dispatch({type: GET_BYNAME, payload: error})
    } 
  }
} */

export const getCurrent = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:4000/v1/current`)
        let error = [{name: 'Not found'}]
        if(response.status === 200) dispatch({type: GET_CURRENT, payload: response.data})
        if(response.status === 404) dispatch({type: GET_CURRENT, payload: error})
    }
  }


