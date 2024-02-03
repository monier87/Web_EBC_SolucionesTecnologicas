import { Link } from "react-scroll";

// Assets
import Logo from '../../assets/footer/LogoFooter.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`} style={{ backgroundColor: '#f0f0f0' }}>
    <div className="wrapper flex-s-between">
      <div style={{ marginLeft: '20px' }}>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={200}>
          <img src={Logo} style={{ width: '130px' }} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
              <span style={{ fontSize: '20px' }}>SERVICIOS</span>
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              <span style={{ fontSize: '20px' }}>SOBRE NOSOTROS</span>
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <span style={{ fontSize: '25px' }}>CONTACTOS</span>
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <span style={{ fontSize: '25px' }}>PROFORMA CONTRATO</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;
