import { useSelector, useDispatch } from "react-redux";
import "./ReadingCard.scss";
import { Link } from "react-router-dom";

import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

import {
  clearAllCard,
  removeFromCard,
  changeReadingStatus,
} from "../redux/readingCard/readingCardActions";

const options = [
  { value: "none", label: "none" },
  { value: "reading", label: "reading" },
  { value: "done", label: "done" },
];

const ReadingCard = () => {
  const card = useSelector((state) => state.card.card);

  const dispatch = useDispatch();

  return (
    <div className="reading-card">
      <div className="reading-card__reading-list">
        <div className="reading-list-conteiner">
          <div className="reading-list-header">
            <p>Title</p>
            <p>Author</p>
            <p>status</p>
            <p>change status</p>
            <p></p>
          </div>
          {card.map((item) => {
            return (
              <div className="reading-list-item" key={uuidv4()}>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.readingStatus}</p>
                {/* after changing status, dispatch an action to change a readingStatus in state */}
                <Select
                  defaultValue={options[0]}
                  onChange={(e) => {
                    return dispatch(changeReadingStatus(item.worksID, e.value));
                  }}
                  options={options}
                />
                <div className="remove-book">
                  <button
                    onClick={() => dispatch(removeFromCard(item.worksID))}
                  >
                    Remove book
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {card.length > 0 && (
          <button
            className="clear-all-list"
            onClick={() => dispatch(clearAllCard())}
          >
            Clear all books
          </button>
        )}
      </div>
      <div className="reading-card__categories">
        <div className="buttons-continer">
          <Link to="/books-reading">
            <button>Books - reading </button>
          </Link>
          {/* //needs to add functionality for books-done - the same solution as for
          books-reading */}
          <button>Books - done</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ReadingCard;
