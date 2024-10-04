import React from "react";
import "../css/page.css";
import "../css/ticketPage.css";
//import "../css/ticket_mobile.css";
import EventItem from "../Components/EventItem";
import { EventsData } from "../Data/EventsData";

function TicketPage({ events = EventsData }) {
  return (
    <div className="ticketPage">
      <div id="event-grid" className="event-grid">
        {events.map(event => (
          <EventItem key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

export default TicketPage;
