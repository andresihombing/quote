import { ActionTypes } from "../../constants";

const initialState = {
  quote: {},
  favorite: [],
  myQuote: []
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_QUOTE:
      return {
        ...state,
        quote: action.payload
      }

    case ActionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorite: [...new Set([...state.favorite, action.payload])]
      }

    case ActionTypes.ADD_MY_QUOTE:
      return {
        ...state,
        myQuote: [...new Set([...state.myQuote, action.payload])]
      }
      
    default:
      return state;
  }
}

export default quoteReducer;
