import { useSelector, useDispatch } from "react-redux";
import "./ReadingCard.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  clearAllCard,
  removeFromCard,
} from "../redux/readingCard/readingCardActions";

const ReadingCard = () => {
  const card = useSelector((state) => state.card.card);
  console.log(card.length);

  //Add/Remove checked item from list
  // const handleCheck = (event) => {
  //   let updatedList = [...checked];
  //   if (event.target.checked) {
  //     updatedList = [...checked, event.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // };

  const dispatch = useDispatch();

  return (
    <div className="reading-card">
      <div className="reading-card__reading-list">
        <div className="reading-list-conteiner">
          <div className="reading-list-header">
            <p>Title</p>
            <p>Author</p>
            <p>status</p>
            <p></p>
          </div>
          {card.map((item) => {
            return (
              <div className="reading-list-item" key={uuidv4()}>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.readingStatus}</p>
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
            Clear all list
          </button>
        )}
      </div>
      <div className="reading-card__categories">b</div>
    </div>
  );
};

export default ReadingCard;
