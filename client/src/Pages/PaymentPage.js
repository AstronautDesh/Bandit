import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/page.css";
import "../css/paymentPage.css";
import "../css/payment_mobile.css";

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaLock,
} from "react-icons/fa";

function PaymentPage() {
  const cardContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.offsetWidth;
      cardContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = cardContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const index = Math.round(container.scrollLeft / container.offsetWidth);
        setActiveIndex(index);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = ["CARD", "USSD", "BANK TRANSFER", "OTHER"];

  return (
    <div className="paymentPage container-fluid">
      <div className="left-section">
        <h1>
          CHECK
          <br />
          -OUT
        </h1>
        <Link to="/ticketPage" className="back-link">
          <h3>← BACK TO EVENTS</h3>
        </Link>
        <div className="total">
          <span>TOTAL</span>
          <span>N--.--</span>
        </div>
        <Link to="/ticketPage" className="back-link-mobile">
          <h3>← BACK TO EVENTS</h3>
        </Link>
      </div>
      <div className="right-section">
        <nav className="nav-grid">
          {navItems.map((item, index) => (
            <div key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${index === activeIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToCard(index);
                }}
              >
                {item}
              </a>
            </div>
          ))}
        </nav>

        <div className="card-container" ref={cardContainerRef}>
          <div className="card">
            <div className="card-types">
              <FaCcVisa size={40} />
              <FaCcMastercard size={40} />
              <FaCcAmex size={40} />
              <FaCcDiscover size={40} />
            </div>
            <div className="card-details">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name On Card" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Card Number" />
              </div>

              <div className="row-group">

              <div className="form-group">
                <input type="text" className="form-control" placeholder="MM / YY" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="CVC" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="ZIP/Postal" />
              </div>

              </div>

            </div>
            <button className="pay-button">
              <FaLock /> Pay
            </button>
          </div>
          <div className="card">
            <h1>USSD Payment</h1>
          </div>
          <div className="card">
            <h1>Bank Transfer</h1>
          </div>
          <div className="card">
            <h1>Other Payment Methods</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
