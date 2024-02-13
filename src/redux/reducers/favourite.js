// qui scrivo il reducer favourite separandolo dall'altro

import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  // qui scrivo la funzione PURA

  switch (action.type) {
    // specifico i cases:
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
export default favouriteReducer;
