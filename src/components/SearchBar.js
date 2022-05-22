import { useState, useEffect } from "react";
import Select from "react-select";
import "./SearchBar.scss";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooksAll } from "../redux/books/booksListActions";

const options = [
  { value: "All", label: "All" },
  { value: "title", label: "title" },
  { value: "author", label: "author" },
  { value: "subject", label: "subject" },
];

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("allooo");
    dispatch(fetchBooksAll(input, selectedOption.value));
  };

  return (
    <>
      <div className="search-bar-component">
        <div className="search-bar-component__search-bar">
          <Select
            defaultValue={options[0]}
            onChange={setSelectedOption}
            options={options}
            className="search-bar-component__select"
          />
          <form onSubmit={handleSubmit} className="search-bar-component__form">
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />

            <button className="btn">
              <BiSearch className="btn-icon" />
            </button>
          </form>
        </div>

        <div className="search-bar-component__search-dropdown"></div>
      </div>
    </>
  );
};

export default SearchBar;
