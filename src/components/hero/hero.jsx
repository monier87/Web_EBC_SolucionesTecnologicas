import { motion } from "framer-motion";
import { Row, Col } from "react-flexbox-grid";
import "./hero.scss";
import HeroImage from '../../assets/hero/hero-image.png';
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1, opacity: 0.8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.9 }}
              className="weight800 font60"
                    
            >
              Bienvenidos!!!
            </motion.h1>
            <h4 className="weight800 font40">
              Somos EBC Soluciones Tecnológicas.
            </h4>
            <p className="font12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} style={{ width: '600px' }} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
