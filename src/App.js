import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadingCard from "./components/ReadingCard";
import AllBooks from "./components/AllBooks";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/reading-card" element={<ReadingCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
