import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/checkoutPage.css";

const MemoizedInput = React.memo(({ label, id, type, placeholder }) => (
  <div className="form-group">
    <input type={type} id={id} placeholder=" " required />
    <label htmlFor={id}>{label}</label>
  </div>
));

const MemoizedSelect = React.memo(({ id, options }) => (
  <select id={id}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
));

const OrderItem = React.memo(({ label, value }) => (
  <div className="order-item">
    <span>{label}</span>
    <span>{value}</span>
  </div>
));

const CheckoutForm = () => {
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const formInputs = useMemo(
    () => [
      {
        label: "*First name",
        id: "firstname",
        type: "text",
        placeholder: "First name",
      },
      {
        label: "*Last name",
        id: "lastname",
        type: "text",
        placeholder: "Last name",
      },
      {
        label: "*Email address",
        id: "email",
        type: "email",
        placeholder: "Email address",
      },
      {
        label: "*Confirm Email address",
        id: "confirmemail",
        type: "email",
        placeholder: "Confirm Email address",
      },
    ],
    []
  );

  const orderItems = useMemo(
    () => [
      { label: "1 x Early Bird Access", value: "₦--, --" },
      { label: "Fees", value: "₦--, --" },
      { label: "Subtotal", value: "₦--, --", className: "subtotal" },
      { label: "Total", value: "₦--,--", className: "total" },
    ],
    []
  );


  return (
    <Container fluid className="checkoutPage">
      <Row>
        <Col>
          <header>
            <div className="logo">BandIt.</div>
            <div className="back-link">{"< Checkout"}</div>
          </header>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="timer-message">
            We've reserved your ticket please complete checkout within{" "}
            <span className="timer">{formatTime(timer)}</span> to secure your
            tickets.
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <div className="checkout-form">
            <Row>
              {formInputs.map((input) => (
                <Col key={input.id} sm={12} md={6}>
                  <MemoizedInput {...input} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <div className="form-group phone">
                  <div className="phone-input-wrapper">
                    <MemoizedSelect id="country-code" options={["+234"]} />
                    <input type="tel" id="phone" placeholder=" " required />
                    <label htmlFor="phone">*Phone number</label>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label>Send tickets to different e-mail addresses ?</label>
                  <p className="info">
                    Tickets will only be sent to the email address you provide here
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={4}>
          <div className="order-summary">
            <h2>Retro Rave</h2>
            <p className="discount-link">Add discount code</p>
            {orderItems.map((item, index) => (
              <OrderItem key={index} label={item.label} value={item.value} />
            ))}
            <button className="checkout-button">Check Out</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CheckoutForm;
