import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "./booksListTypes";

import axios from "axios";

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchBooksAll = (params, searchBy) => {
  return (dispatch) => {
    const replaceSpaces = params.split(" ").join("+");
    //we need to replace space with + sign when using params in axios request
    if (searchBy.toLowerCase() === "all") {
      dispatch(fetchBooksRequest());
      axios
        .get(`http://openlibrary.org/search.json?q=${replaceSpaces}&limit=20`)
        .then((response) => {
          // response.data is the users
          const books = response.data;
          //we are making array of object with data that are going to be used in project
          const results = books.docs.map((result) => {
            return makeObject(result);
          });
          dispatch(fetchBooksSuccess(results));
        })
        .catch((error) => {
          // error.message is the error message
          dispatch(fetchProductsFailure(error.message));
        });
    } else {
      dispatch(fetchBooksRequest());
      axios
        .get(
          `http://openlibrary.org/search.json?${searchBy}=${replaceSpaces}&limit=20`
        )
        .then((response) => {
          const books = response.data;

          const results = books.docs.map((result) => {
            return makeObject(result);
          });
          dispatch(fetchBooksSuccess(results));
        })
        .catch((error) => {
          dispatch(fetchProductsFailure(error.message));
        });
    }
  };
};

//helper function to maps the array and make an object of needed properties
const makeObject = (result) => {
  return {
    title: result.title,
    author: result.author_name || "Unknown author",
    year: result.first_publish_year || null,
    editions: result.edition_count,
    tags: result.subject || [],
    openLibID: result.cover_edition_key,
    worksID: result.key,
  };
};
