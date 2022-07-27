import { ActionTypes } from "../../constants";

export const getQuote = () => {
  return {
    type: ActionTypes.GET_QUOTE,
  }
}

export const setQuote = (response) => {
  return {
    type: ActionTypes.SET_QUOTE,
    payload: response
  }
}

export const addFavorite = (quote) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: quote
  }
}

export const myQuotes = (quote) => {
  return {
    type: ActionTypes.ADD_MY_QUOTE,
    payload: quote
  }
}