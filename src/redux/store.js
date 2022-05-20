import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./books/booksListReducer";
import readingCardReducer from "./readingCard/readingCardReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  card: readingCardReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export default store;
