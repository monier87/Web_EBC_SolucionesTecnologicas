import { Link } from "react-scroll";

// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg';
import Logo from '../../assets/footer/LogoFooter.png';

const handleDownload = () => window.open("/Proforma.doc", "_blank")

const mobileNav = (props) => (
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile__navbar-logo flex-center">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        <img src={Logo} alt="logo" />
      </Link>
    </div>
    <div className="mobile__navbar-menu">
      <ul>
      <li className="flex-center">
      <Link
        activeClass="active-link"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        SOBRE NOSOTROS
      </Link>
    </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            SERVICIOS
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            CONTACTOS
          </Link>
        </li>
        <li className="flex-center">
        <Link
          activeClass="active-link"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleDownload} href='#'
        >
           DESCARGAR PROFORMA
        </Link>
      </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
