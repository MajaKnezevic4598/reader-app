import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CLEAR_ALL_CARD,
} from "./readingCardTypes";

export const addToCard = (book) => {
  return {
    type: ADD_TO_CARD,
    payload: {
      book: book,
    },
  };
};

export const removeFromCard = (id) => {
  return {
    type: REMOVE_FROM_CARD,
    payload: {
      bookId: id,
    },
  };
};

export const clearAllCard = () => {
  return {
    type: CLEAR_ALL_CARD,
  };
};
