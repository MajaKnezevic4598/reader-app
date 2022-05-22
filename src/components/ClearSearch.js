import "./ClearSearch.scss";
import { fetchBooksAll } from "../redux/books/booksListActions";
import { useDispatch } from "react-redux";

const ClearSearch = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(fetchBooksAll("", "all"));
      }}
      className="clear-search"
    >
      Clear Search
    </button>
  );
};

export default ClearSearch;
