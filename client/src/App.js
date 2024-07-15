import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HomePage from "./Pages/HomePage";
import TicketPage from "./Pages/TicketPage";
import PaymentPage from "./Pages/PaymentPage";
import BlogPage from "./Pages/BlogPage";
import DropdownMenuList from './Components/DropdownButton';

import "./App.css";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

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
        >
          <div className="page-container">
            {currentPage === "/" && <HomePage />}
            {currentPage === "/ticketPage" && <TicketPage />}
            {currentPage === "/payment_portal" && <PaymentPage />}
            {currentPage === "/blogPage" && <BlogPage />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;