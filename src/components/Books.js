import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";

import "./Books.scss";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const books = useSelector((state) => state.books);
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  //change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const bookList = currentBooks.map((book) => {
    const title = book.title;
    const author = book.author[0];
    const worksID = book.worksID;
    const subjects = book.tags.slice(0, 2).join(", ");
    const openLibID = book.openLibID;
    const year = book.year;

    console.log(subjects);

    return (
      <div className="book-card" key={uuidv4()}>
        <h3>
          <span>Title: </span>
          {title}
        </h3>
        <h4>Author: {author}</h4>
        <div className="book-card__img-conteiner">
          <img
            src={`https://covers.openlibrary.org/b/olid/${openLibID}-M.jpg`}
            alt="cover-image"
          />
        </div>

        <div>Year:{year}</div>
        <div>
          <span style={{ fontWeight: "bold" }}>Subjects: </span>
          {subjects}
        </div>
      </div>
    );
  });
  return (
    <div className="books-conteiner">
      <>{bookList}</>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Books;
