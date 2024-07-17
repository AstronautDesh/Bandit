import React from "react";
import { Link } from "react-router-dom";
import "../css/page.css";
import "../css/paymentPage.css";
// import { creditCardImage } from "../Data/EventsData"; // Uncomment this if needed

import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaLock,
} from "react-icons/fa";

function PaymentPage() {
  // const cardStyle = {
  //   backgroundImage: `url(${creditCardImage})`
  // };

  return (
    <div className="paymentPage">
      <div className="top-right-corner"></div>
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
          <span>$979.80</span>
        </div>
      </div>
      <div className="right-section">
        <nav>
          <span>SHOPPING</span>
          <span>→</span>
          <span>ADDRESS</span>
          <span>→</span>
          <span className="active">CHECKOUT</span>
        </nav>
        <div className="card-container">
          <div className="card">
            <div className="card-types">
              <FaCcVisa size={40} />
              <FaCcMastercard size={40} />
              <FaCcAmex size={40} />
              <FaCcDiscover size={40} />
            </div>
            {/* Uncomment the following line if you have a creditCardImage */}
            {/* <img src={creditCardImage} alt="Credit Card" /> */}
            <div className="card-details">
              <input type="text" placeholder="Name On Card" />
              <input type="text" placeholder="Card Number" />
              <div className="form-row">
                <input type="text" placeholder="MM / YY" />
                <input type="text" placeholder="Security code" />
                <span className="info-icon">?</span>
                <input type="text" placeholder="ZIP/Postal code" />
                <span className="info-icon">?</span>
              </div>
            </div>

            <button className="pay-button">
              <span className="lock-icon">
                <FaLock />
              </span>{" "}
              {/* Use the FaLock icon */}
              Pay
            </button>
          </div>
          <div className="card">
            <h1>Payment Portal</h1>
          </div>
          <div className="card">
            <h1>Payment Portal</h1>
          </div>
          <div className="card">
            <h1>Payment Portal</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
