import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Components/Carousel';
import { images_and_data } from "../Components/Data";
import '../css/page.css';
//import '../css/page_mobile.css';

function HomePage() {
  const [autoPlay, setAutoPlay] = React.useState(true);

  return (
    <div className="form-grid-wrapper">
 
     
            <div
              className="form-container"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <Carousel images={images_and_data} autoPlay={autoPlay} />
              <Link to="/ticketPage" replace>
                <button className="btn btn-primary">Tickets Here</button>
              </Link>
            </div>

            <div className="headpage">
              <h1>BLOODIE BANDIT.</h1>
              <h3>Na Here Ya Ticket Dey.</h3>
            </div>
  
       
      </div>

  );
}

export default HomePage;