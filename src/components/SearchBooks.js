import "./SearchBooks.scss";
import SearchBar from "./SearchBar";
import Books from "./Books";
import ClearSearch from "./ClearSearch";

const SearchBooks = () => {
  return (
    <div className="search">
      <SearchBar />
      {/* <ClearSearch /> */}
      {/* the idea was to hava a butoon that clears all books */}
      <Books />
    </div>
  );
};

export default SearchBooks;
