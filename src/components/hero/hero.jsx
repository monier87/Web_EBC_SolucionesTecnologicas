import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'react-flexbox-grid';
import './hero.scss';
import HeroImage1 from '../../assets/hero/hero-image.png';
import HeroImage2 from '../../assets/hero/hero-image-2.png';
import HeroImage3 from '../../assets/hero/hero-image-3.png';
import HeroImage5 from '../../assets/hero/hero-image-5.png'
import Button from '../ui-components/button/button';

const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage5];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
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
              <Button label="ENVIAR MENSAJE" target={'contact'} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="hero-image">
              <img src={images[currentImageIndex]} style={{ width: '600px' }} alt={`hero-${currentImageIndex + 1}`} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
