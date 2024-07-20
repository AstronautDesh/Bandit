import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./Pages/HomePage";
import TicketPage from "./Pages/TicketPage";
import PaymentPage from "./Pages/PaymentPage";
import BlogPage from "./Pages/BlogPage";
import DropdownMenuList from './Components/DropdownButton';
import CheckoutForm from './Pages/CheckoutForm';

import "./App.css";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const nodeRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <DropdownMenuList onNavigate={handleNavigation} />
      <TransitionGroup>
        <CSSTransition
          key={currentPage}
          classNames="fade"
          timeout={300}
          nodeRef={nodeRef}
        >
          <div ref={nodeRef} className="page-container">
            {currentPage === "/" && <HomePage />}
            {currentPage === "/ticketPage" && <TicketPage />}
            {currentPage === "/payment_portal" && <PaymentPage />}
            {currentPage === "/blogPage" && <BlogPage />}
            {currentPage === "/CheckoutForm" && <CheckoutForm />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;