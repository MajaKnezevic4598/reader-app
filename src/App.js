import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ReadingCard from "./components/ReadingCard";
import SearchBooks from "./components/SearchBooks";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/reading-card" element={<ReadingCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
