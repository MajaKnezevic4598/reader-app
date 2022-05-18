import { useState, useEffect } from "react";
import Select from "react-select";
import "./SearchBar.scss";
import { BiSearch } from "react-icons/bi";

const options = [
  { value: "All", label: "All" },
  { value: "title", label: "title" },
  { value: "author", label: "author" },
  { value: "subject", label: "subject" },
];

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("allooo");
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
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
            <input type="text" placeholder="Search..." />

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
