import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  favourite: {
    list: [],
    // creo una nuova slice nello stato con l'array contenente
    // i risultati della ricerca
    search: {
      results: [],
    },
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
