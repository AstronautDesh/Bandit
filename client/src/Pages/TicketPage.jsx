import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/page.css";
import "../css/ticketPage.css";
import EventItem from "../Components/EventItem";
import { EventsData } from "../Data/EventsData";

function TicketPage({ events = EventsData }) {
  return (
    <Container fluid className="ticketPage">
      <Row id="event-grid">
        {events.map(event => (
          <Col xs={12} sm={6} md={4} lg={3} key={event.id}>
            <EventItem {...event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TicketPage;
