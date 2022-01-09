import { GET_CURRENT, GET_CURRENT_FORECAST, ADD_CITY, DELETE_CITY, DELETE_ALL, SET_ALERT, RESET_ALERT } from "./actions/actionTypes";

const initialState = {
    cities: [],
    currentCity: [],
    currentCityForecast: null,
    alert: []
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
    case DELETE_CITY :
    return {
      ...state,
      cities: state.cities.filter( city  => city.name !== action.payload)
    }
    case DELETE_ALL :
    return {
      ...state,
      cities: action.payload
    }
    case SET_ALERT :
    return {
      ...state,
      alert: action.payload
    }
    case RESET_ALERT :
    return {
      ...state,
      alert: action.payload
    }
    default:
        return {
          ...state
        }
      }
  }

export default reducer 