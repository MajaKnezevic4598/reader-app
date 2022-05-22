import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CLEAR_ALL_CARD,
  CHANGE_READING_STATUS,
} from "./readingCardTypes";

const initialState = {
  card: [],
};

const readingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const ID = action.payload.book.worksID;
      console.log(state.card);
      // const inCard = state.card.some((item) => item.worksID === ID);
      // state.card.map((item) => console.log(item));

      const a = state.card.some((item) => item.worksID === ID);
      if (a) return state;

      return {
        ...state,
        card: [...state.card, { ...action.payload.book, isInCard: true }],
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
    case CHANGE_READING_STATUS:
      console.log(action.payload.bookId);
      console.log(action.payload.status);
      return {
        ...state,
        card: state.card.map((item) => {
          return item.worksID === action.payload.bookId
            ? { ...item, readingStatus: action.payload.status }
            : item;
        }),
      };
    default:
      return state;
  }
};

export default readingCardReducer;
