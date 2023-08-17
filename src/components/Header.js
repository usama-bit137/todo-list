import "../styles/Header.css";
import logo from "../icons/logo.svg";
function Header() {
  return (
    <header id="header">
      <img src={logo} width="50px" className="header--logo" alt="Todo? logo" />
      <h1 className="header--title">todo?</h1>
    </header>
  );
}

export default Header;
