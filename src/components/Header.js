import "./Header.scss";
import logo from "../assets/books-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const books = useSelector((state) => state.card.card);
  return (
    <header className="header">
      <div className="header__logo-conteiner">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <Link to="/" className="header__link">
        Home
      </Link>
      <Link to="/reading-card" className="header__link">
        <div>Reading Card</div>
        <div>items: {books.length}</div>
      </Link>
    </header>
  );
};

export default Header;
