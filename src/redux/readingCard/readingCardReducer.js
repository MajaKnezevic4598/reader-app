import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CLEAR_ALL_CARD,
  CHANGE_READING_STATUS,
  ADD_NOTES,
} from "./readingCardTypes";

const initialState = {
  card: [],
};

const readingCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const ID = action.payload.book.worksID;
      // console.log(state.card);

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

    case ADD_NOTES: {
      return {
        ...state,
        card: state.card.map((item) => {
          return item.worksID === action.payload.bookId
            ? { ...item, notes: { ...action.payload.notes } }
            : item;
        }),
      };
    }

    case CLEAR_ALL_CARD:
      return initialState;
    case CHANGE_READING_STATUS:
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
