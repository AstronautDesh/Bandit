import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion";
import Carousel from '../Components/Carousel';
import { images_and_data } from "../Components/Data";

//import css
import '../css/page.css';

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
      <div
        className="form-container"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <Carousel images={images_and_data} autoPlay={autoPlay} />
        <Link to="/ticketPage" replace>
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