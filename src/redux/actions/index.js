export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

// creazione della funzione action creator per evitare di copia incollare
//il dispatch dell'oggetto contenente l'azione in più componenti dell'app.

export const addToFavouriteAction = (companyName) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: companyName,
  };
};

export const removeFromFavouriteAction = (companyName) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: companyName,
  };
};
