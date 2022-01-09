import { GET_CURRENT, GET_CURRENT_FORECAST, ADD_CITY, DELETE_CITY, DELETE_ALL, SET_ALERT, RESET_ALERT, GET_SELECTED_FORECAST, SET_INDEX_CARD, DELETE_ALL_FORECAST, DELETE_CITY_FORECAST } from "./actions/actionTypes";

const initialState = {
    cities: [],
    currentCity: [],
    currentCityForecast: null,
    alert: [],
    selectedForecast: [],
    numberOfCard: null
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
    case GET_SELECTED_FORECAST :
    return {
      ...state,
      selectedForecast: [...state.selectedForecast, action.payload]
    }
    case SET_INDEX_CARD :
    return {
      ...state,
      numberOfCard: action.payload
    }
    case DELETE_ALL_FORECAST :
    return {
      ...state,
      selectedForecast: action.payload
    }
    case DELETE_CITY_FORECAST :
    return {
      ...state,
      selectedForecast: state.selectedForecast.filter( city  => city.city.name !== action.payload)
    }
    default:
        return {
          ...state
        }
      }
  }

export default reducer 