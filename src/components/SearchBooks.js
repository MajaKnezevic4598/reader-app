import "./SearchBooks.scss";
import SearchBar from "./SearchBar";
import Books from "./Books";

const SearchBooks = () => {
  return (
    <div className="search">
      <SearchBar />
      <Books />
    </div>
  );
};

export default SearchBooks;
