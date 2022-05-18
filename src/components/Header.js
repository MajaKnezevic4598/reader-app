import "./Header.scss";
import img1 from "../assets/books-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-conteiner">
        <img src={img1} alt="logo" className="header__logo" />
      </div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/reading-card">
        <div>Reading Card</div>
      </Link>
    </header>
  );
};

export default Header;
