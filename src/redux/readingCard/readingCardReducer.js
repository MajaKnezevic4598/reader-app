import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CLEAR_ALL_CARD,
} from "./readingCardTypes";

const initialState = {
  card: [],
};

const readingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const ID = action.payload.book.worksID;
      const inCard = state.card.some((item) => item.worksID === ID);

      return {
        ...state,
        card: !inCard
          ? [...state.card, action.payload.book]
          : state.card.map((item) =>
              item.worksID === ID ? { ...item, isInCard: true } : item
            ),
      };
    case REMOVE_FROM_CARD:
      return {
        ...state,
        card: state.card.filter(
          (item) => item.worksID !== action.payload.bookId
        ),
      };

    case CLEAR_ALL_CARD:
      return initialState;
    default:
      return state;
  }
};

export default readingCardReducer;
