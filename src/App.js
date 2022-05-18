import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadingCard from "./components/ReadingCard";
import SearchBooks from "./components/SearchBooks";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/reading-card" element={<ReadingCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
