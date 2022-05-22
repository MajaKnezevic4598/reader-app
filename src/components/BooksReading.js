import "./BooksReading.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { addNotes } from "../redux/readingCard/readingCardActions";

import { v4 as uuidv4 } from "uuid";

Modal.setAppElement("#root");

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];
const BooksReading = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  //state from form add notes
  const [selectedOption, setSelectedOption] = useState("");
  const [formState, setFormState] = useState({
    genre: "",
    topics: "",
    quotations: "",
    select: "",
  });

  const handleChange = (e) => {
    setFormState((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    console.log("this is form state");
    dispatch(addNotes(currentBook.id, formState));
    // setFormState({ genre: "", topics: "", quotations: "", select: "" });
    // setSelectedOption("");
  };

  useEffect(() => {
    if (selectedOption) {
      setFormState((prev) => {
        return { ...prev, select: selectedOption.value };
      });
    }
  }, [selectedOption]);

  const booksFromReadingCard = useSelector((state) => state.card.card);
  const currentlyReading = booksFromReadingCard.filter(
    (item) => item.readingStatus === "reading"
  );
  console.log(currentlyReading);

  //styles from select component

  return (
    <div className="books-reading">
      <h3>Currently reading</h3>
      {currentlyReading.map((item, index) => (
        <div key={uuidv4()} className="books-reading__book">
          <p>{index + 1}.</p>
          <p>
            <span style={{ fontWeight: "bold" }}>title</span>: {item.title}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>author: </span> {item.author}
          </p>
          <button
            className="add-notes"
            onClick={() => {
              setModalIsOpen(true);
              setCurrentBook({
                author: item.author,
                title: item.title,
                id: item.worksID,
              });
            }}
          >
            Add notes
          </button>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
        <h3>Notes about "{currentBook.title}"</h3>
        <p>Author: {currentBook.author} </p>

        <form className="add-notes-form" onSubmit={handleSubmit}>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            placeholder="genre.."
            id="genre"
            value={formState.genre}
            onChange={handleChange}
          />
          <label htmlFor="topiscs">Topics:</label>
          <input
            type="text"
            placeholder="topics.."
            id="topics"
            value={formState.topics}
            onChange={handleChange}
          />
          <p>Personal rating 1-5:</p>
          <Select
            value={selectedOption}
            options={options}
            className="select-rate"
            onChange={setSelectedOption}
          />
          <p>Top quotations:</p>
          <textarea
            value={formState.quotations}
            id="quotations"
            onChange={handleChange}
          />
          <button>Add notes</button>
        </form>

        <button
          className="close-modal"
          onClick={() => {
            setModalIsOpen(false);
            setCurrentBook({});
          }}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default BooksReading;
