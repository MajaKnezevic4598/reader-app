import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import booksReducer from "./books/booksListReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: booksReducer,
});

export default store;
