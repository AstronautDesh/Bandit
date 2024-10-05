import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TransactionModal = ({ show, onHide, name, contactMethod, contactValue }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Transaction Complete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you, {name}!</p>
        <p>A receipt of your transaction has been sent to your {contactMethod}:</p>
        <p><strong>{contactValue}</strong></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionModal;
