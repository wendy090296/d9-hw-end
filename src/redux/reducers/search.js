// qui scrivo il mio search reducer separandolo dall'altro

const initialState:{
    results:[],
};

    const searchReduce = (state = initialState, action) => {
        // qui scrivo la funzione PURA
      
        switch (action.type) {
          // specifico i cases:
          case GET_DATA:
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
    };
      export default searchReduce;
      
    