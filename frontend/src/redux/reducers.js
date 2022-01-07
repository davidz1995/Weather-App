import { GET_CURRENT } from "./actions/actionTypes";

//let cities = []

const initialState = {
    currentCity: [],
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CURRENT :
        return {
            ...state,
            currentCity: action.payload
        }
      default:
        return {
          ...state
        }
      }
  }

export default reducer 