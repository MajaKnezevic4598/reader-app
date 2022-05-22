import "./BooksReading.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";

import { v4 as uuidv4 } from "uuid";

Modal.setAppElement("#root");
const BooksReading = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const booksFromReadingCard = useSelector((state) => state.card.card);
  const currentlyReading = booksFromReadingCard.filter(
    (item) => item.readingStatus === "reading"
  );
  console.log(currentlyReading);
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
            }}
          >
            Add notes
          </button>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
        <h2>Modal</h2>
        <button className="close-modal" onClick={() => setModalIsOpen(false)}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default BooksReading;
