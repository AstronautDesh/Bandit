import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion";
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import DropdownButton from './DropdownButton';
import Carousel from './Carousel';
import { images_and_data } from "./Data";

function HomePage() {
  const [autoPlay, setAutoPlay] = React.useState(true);

  return (
          <m.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="form-grid-wrapper"
          >
            <div className="top-right-corner">
              <DropdownButton />
            </div>
            <div
              className="form-container"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <Carousel images={images_and_data} autoPlay={autoPlay} />
              <Link to="/newbox" replace>
                <button>Tickets Here</button>
              </Link>
            </div>
            <div className="headpage">
              <h1>BLOODIE BANDIT.</h1>
              <h3>Na Here Ya Ticket Dey.</h3>
            </div>
          </m.div>
  );
}

export default HomePage;