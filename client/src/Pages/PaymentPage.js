import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import "../css/page.css";
import "../css/paymentPage.css";

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
    if (cardContainerRef.current) {  // Changed to cardContainerRef
      const cardWidth = cardContainerRef.current.offsetWidth;
      cardContainerRef.current.scrollTo({  // Changed to cardContainerRef
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
    <Container fluid className="paymentPage">
      <Row>
        <Col md={4} className="left-section">
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
        </Col>
        <Col md={8} className="right-section">
          <Nav className="justify-content-between">
            {navItems.map((item, index) => (
              <Nav.Item key={item}>
                <Nav.Link 
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => scrollToCard(index)}
                >
                  {item}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <div className="card-container" ref={cardContainerRef}>
            <div className="card">
              <div className="card-types">
                <FaCcVisa size={40} />
                <FaCcMastercard size={40} />
                <FaCcAmex size={40} />
                <FaCcDiscover size={40} />
              </div>
              <Form className="card-details">
                <Form.Group>
                  <Form.Control type="text" placeholder="Name On Card" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Card Number" />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="MM / YY" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Security code" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="ZIP/Postal code" />
                  </Col>
                </Row>
              </Form>
              <Button className="pay-button">
                <FaLock /> Pay
              </Button>
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
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;