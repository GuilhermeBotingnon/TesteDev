import React from 'react'
import "./footer.css"
import navImage from "../../assets/icons/nav_logo.svg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="_container content">
        <img src={navImage} alt="nav logo"/>
        <span className="copyright">
            © 2024 DEV. - Todos os direitos reservados
          </span>
      </div>
    </footer>
  );
}

export default Footer;