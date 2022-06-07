import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ReadingCard from "./components/ReadingCard";
import SearchBooks from "./components/SearchBooks";
import BooksReading from "./components/BooksReading";
import BooksDone from "./components/BooksDone";
import PageNotFound from "./components/PageNotFound";
import store from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SearchBooks />} />
              <Route path="/reading-card" element={<ReadingCard />} />
              <Route path="/books-reading" element={<BooksReading />} />
              <Route path="/books-done" element={<BooksDone />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
