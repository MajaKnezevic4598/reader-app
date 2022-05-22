import {
  ADD_TO_CARD,
  REMOVE_FROM_CARD,
  CLEAR_ALL_CARD,
  CHANGE_READING_STATUS,
  ADD_NOTES
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

export const changeReadingStatus = (id, status) => {
  return {
    type: CHANGE_READING_STATUS,
    payload: {
      bookId: id,
      status: status,
    },
  };
};

export const addNotes = (id,notes) =>{
  return {
    type:ADD_NOTES,
    payload:{
      bookId:id,
      notes:notes
    }
  }
}
