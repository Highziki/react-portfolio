import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        <p>© 2024 Isaac Akinropo. All rights reserved</p>
      </div>

      {/* Socials */}
      <ul className="footer-social-media">
        <li>
          <i className="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-youtube"></i>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
