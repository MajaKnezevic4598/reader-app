import { ADD_TO_CARD, REMOVE_FROM_CARD } from "./readingCardTypes";

export const addToCard = (id, book) => {
  return {
    type: ADD_TO_CARD,
    payload: {
      bookId: id,
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
