import { GET_CURRENT, GET_CURRENT_FORECAST, ADD_CITY } from "./actions/actionTypes";

const initialState = {
    cities: [],
    currentCity: [],
    currentCityForecast: null
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CURRENT :
        return {
            ...state,
            currentCity: action.payload
        }
    case GET_CURRENT_FORECAST :
        return {
            ...state,
            currentCityForecast: action.payload
        }
    case ADD_CITY :
        return {
            ...state,
            cities: [...state.cities, action.payload]
        }
    default:
        return {
          ...state
        }
      }
  }

export default reducer 