import React, { useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]); 
  return (

    <div className="App">
      <Header />
      <div id="tournament-events-container"> 
        <Tournament setEvents={setEvents} events={events} /> 
        <EventList events={events} /> 
      </div>
    </div>
  );
}

export default App;

//Header
const Header = () => {
  return (
    <div id="bar">
      <h1 className="text-5xl">Swiss CHESS</h1>
      <div id="text-overlay" className="flex gap-8">
        <span className="bar-text">FAQ</span>
        <span className="bar-text">Home</span>
      </div>
    </div>
  );
};

// Tournament creation 
const Tournament = ({ setEvents, events }) => {
  const [city, setCity] = useState("");
  const [members, setMembers] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create newEvent
    const newEvent = {
      city,
      members,
      date,
    };

    
    setEvents([...events, newEvent]);

    // Clear the fields
    setCity("");
    setMembers("");
    setDate("");
  };

  //Interface
  return (
    <div id="tournament">
      <div className="header header-tournament">
        <h1 className="justify-center">Create tournament</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          required
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          required
          type="number"
          placeholder="Members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
        <input
          placeholder="Date"
          required
          type="text"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"    
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

// Display a list of events
const EventList = ({ events }) => {
  // Error handler
  if (!events || events.length === 0) {
    return <p>No events found</p>; 
  }

  return (
    <div id="event-list">
      {events.map((event, index) => (
        <Ivent key={index} city={event.city} members={event.members} date={event.date} />
      ))}
    </div>
  );
};

// Ivent 
const Ivent = ({ city, members, date }) => {
  return (
    <div id="ivent">
      <div className="header">
        <h1 className="flex flex-1 justify-center">{city}</h1>
        <h1 className="flex justify-end">{date}</h1>
      </div>
      <h1 className="members-text">{members} members</h1>
    </div>
  );
};
