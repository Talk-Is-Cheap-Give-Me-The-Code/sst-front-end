import React from "react";
import Ivent from "./Ivent"; // Import the Ivent component

// EventList component that displays a list of tournament events
const EventList = ({ events }) => {
  if (!events || events.length === 0) {
    return <p>No events found</p>; // Message if no events are present
  }

  return (
    <div id="event-list">
      {events.map((event, index) => (
        // Map through events and render an Ivent for each
        <Ivent key={index} city={event.city} members={event.members} date={event.date} />
      ))}
    </div>
  );
};

export default EventList;
