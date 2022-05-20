import { v4 as uuidv4 } from "uuid";
import "./Pagination.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  nextPage,
  previousPage,
  current,
}) => {
  const pageNumbersArr = [];

  const pageNumbers = Math.ceil(totalBooks / booksPerPage);
  for (let i = 1; i <= pageNumbers; i++) {
    pageNumbersArr.push(i);
  }

  return (
    <section className="pagination-conteiner">
      {totalBooks > 0 && (
        <div
          onClick={() => previousPage()}
          //   className={current === 1 ? "disabled" : null}
          className={`navigate-item ${current === 1 ? "disabled" : null}`}
        >
          <MdNavigateBefore />
        </div>
      )}
      {pageNumbersArr.map((number) => (
        <div
          key={uuidv4()}
          onClick={() => paginate(number)}
          //   className={current === number ? "selected" : null}
          className={`pagination-item ${
            current === number ? "selected" : null
          }`}
        >
          {number}
        </div>
      ))}
      {totalBooks > 0 && (
        <div
          onClick={() => nextPage()}
          className={`navigate-item ${
            current === pageNumbers ? "disabled" : null
          }`}
        >
          <MdNavigateNext />
        </div>
      )}
    </section>
  );
};

export default Pagination;
