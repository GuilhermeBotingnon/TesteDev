import "./navbar.css";
import navImage from "../../assets/icons/nav_logo.svg";
import Button from '../button'

function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="main-navbar">
        <img src={navImage} alt="nav logo" className="logo"/>
        <span className="title">Teste - Desenvolvedor React Native</span>
        <Button variant="primary" text="Entrar em contato"/>
      </nav>
    </header>
  );
}

export default Navbar;