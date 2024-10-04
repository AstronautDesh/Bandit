import React, { useState } from 'react';
import '../css/paymentPage.css';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState(1);

  const calculateTotal = () => {
    const subtotal = parseFloat(amount) * quantity;
    const tax = subtotal * 0.1; // Assuming 10% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <div className="paymentPage">
      <h1>Payment Page</h1>
      <div className="paymentContainer">
        <div className="paymentDetails">
          <h2>Payment</h2>
          <p className="invoiceLink">December invoice Financial Services (PDF) <span>↓</span></p>
          <div className="amountDetails">
            <div className="amountRow">
              <span>Amount:</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div className="amountRow">
              <span>Quantity:</span>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="amountRow">
              <span>Subtotal:</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="amountRow">
              <span>Tax:</span>
              <span>£{tax.toFixed(2)}</span>
            </div>
            <div className="amountRow total">
              <span>Amount to pay:</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
          <label className="rememberCard">
            <input type="checkbox" />
            <span>Remember bank card</span>
          </label>
        </div>
        <div className="cardDetails">
          <h2>Card Details</h2>
          <input type="text" placeholder="Cardholder's Name" />
          <div className="cardNumber">
            <input type="text" placeholder="Card Number" />
            <img src="/path-to-mastercard-icon.png" alt="Mastercard" />
          </div>
          <div className="cardExpiry">
            <input type="text" placeholder="MM" maxLength="2" />
            <input type="text" placeholder="YY" maxLength="2" />
            <input type="text" placeholder="CVV" maxLength="3" />
          </div>
          <button className="payNowButton">Pay now</button>
        </div>
      </div>
      <div className="ikeaLogo">IKEA</div>
    </div>
  );
};

export default PaymentPage;