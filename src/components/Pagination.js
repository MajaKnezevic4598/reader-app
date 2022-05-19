import { v4 as uuidv4 } from "uuid";

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ width: "100%" }}>
      <ul>
        {pageNumbers.map((number) => (
          <li key={uuidv4()}>
            <a
              href="#"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
