import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";
import LoadingSpiner from "./LoadingSpiner";

import { addToCard } from "../redux/readingCard/readingCardActions";

import "./Books.scss";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const books = useSelector((state) => state.books.books);
  const booksInCard = useSelector((state) => state.card.card);

  //need to create function that checks if book with certaing ID is in the card or not
  //we need to loop true bookList

  const isLoading = useSelector((state) => state.books.loading);
  const isInCard = useSelector((state) => state.card.card);
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const dispatch = useDispatch();

  //change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage >= 7) return;
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const bookList = currentBooks.map((book) => {
    // console.log(book);
    const title = book.title;
    const author = book.author[0];
    const worksID = book.worksID;
    const subjects = book.tags.slice(0, 2).join(", ");
    const openLibID = book.openLibID;
    const year = book.year;

    const areInCard = booksInCard.some(
      (item) => item.worksID === worksID && item.isInCard
    );

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
        <button
          className="book-card__btn"
          onClick={() => dispatch(addToCard(book))}
        >
          {areInCard ? "book added" : "Add to reading card"}
        </button>
      </div>
    );
  });

  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="books-conteiner">
      <>{bookList}</>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        current={currentPage}
      />
    </div>
  );
};

export default Books;
