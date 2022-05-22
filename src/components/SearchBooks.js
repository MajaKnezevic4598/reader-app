import "./SearchBooks.scss";
import SearchBar from "./SearchBar";
import Books from "./Books";
import ClearSearch from "./ClearSearch";

const SearchBooks = () => {
  return (
    <div className="search">
      <SearchBar />
      <ClearSearch />
      <Books />
    </div>
  );
};

export default SearchBooks;
