import { ADD_TO_CARD, REMOVE_FROM_CARD } from "./readingCardTypes";

const initialState = {
  card: [],
};

const readingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        card: [...state.card, ...action.payload.book],
      };
    default:
      return state;
  }
};

export default readingCardReducer;
