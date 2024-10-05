import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import TransactionModal from "../Components/TransactionModal";
import "../css/paymentPage.css";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [contactValue, setContactValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const calculateTotal = () => {
    const parsedAmount = parseFloat(amount) || 0; // Parse amount safely
    const subtotal = parsedAmount * quantity;
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return {
      subtotal: isNaN(subtotal) ? 0 : subtotal,
      tax: isNaN(tax) ? 0 : tax,
      total: isNaN(total) ? 0 : total,
    };
  };

  const { subtotal, tax, total } = calculateTotal();

  const handlePayment = () => {
    console.log("Handle Payment");
    setShowModal(true);
    };

    const images = {
      mastercard: require("../Asset/mastercard.png"),
      visa: require("../Asset/visa.png"),
    };

  return (
    <Container fluid className="paymentPage">
      <Row className="payment-grid">
        <Col md={10} lg={8} xl={10}>
          <h1 className="headerText">Payment Page</h1>
          <div className="paymentContainer">
            <Row className="sectionPaymentDetails">
              <Col md={6} lg={6} className="paymentDetails">
                <h2>Payment</h2>
                <p className="invoiceLink">
                  Receipt (PDF) <span>↓</span>
                </p>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control
                      as="select"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      } // Safely parse integer
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <div className="amountRow">
                    <span>Subtotal:</span>
                    <span>{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="amountRow">
                    <span>Tax:</span>
                    <span>{tax.toFixed(2)}</span>
                  </div>
                  <div className="amountRow total">
                    <span>Amount to pay:</span>
                    <span>{total.toFixed(2)}</span>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember bank card" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row className="sectionCardDetails">
              <Col md={6} lg={6} className="cardDetails">
                <h2>Card Details</h2>
                <Form>
                  <Form.Group className="input">
                    <Form.Control
                      type="text"
                      placeholder="Cardholder's Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="input">
                    <InputGroup>
                      <Form.Control type="text" placeholder="Card Number" />
                      <InputGroup.Text className="card-icon-grid">
                        <img
                          src={images.mastercard}
                          alt="Mastercard"
                          className="card-icon"
                        />
                        <img
                          src={images.visa}
                          alt="Visa"
                          className="card-icon"
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Row className="inputDigits">
                    <Col>
                      <Form.Group className="input input-digit">
                        <Form.Control
                          type="text"
                          placeholder="MM"
                          maxLength="2"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="input input-digit">
                        <Form.Control
                          type="text"
                          placeholder="YY"
                          maxLength="2"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="input input-digit">
                        <Form.Control
                          type="text"
                          placeholder="CVV"
                          maxLength="3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="input">
                    <Form.Label>Receive receipt via:</Form.Label>
                    <Form.Control
                      className="input"
                      as="select"
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value)}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Number</option>
                    </Form.Control>
                    <Form.Control
                      type={contactMethod === "email" ? "email" : "tel"}
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={
                        contactMethod === "email"
                          ? "Enter your email"
                          : "Enter your phone number"
                      }
                      className="mt-3 inputContact"
                    />
                  </Form.Group>
                  <Button className="payNowButton" onClick={handlePayment}>
                    Pay now
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <TransactionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        name={name}
        contactMethod={contactMethod}
        contactValue={contactValue}
      />
    </Container>
  );
};

export default PaymentPage;
