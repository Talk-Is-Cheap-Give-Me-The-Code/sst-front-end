import React, { useState } from "react";

// Tournament component for creating new tournament events
const Tournament = ({ setEvents, events }) => {
  const [city, setCity] = useState("");        // State for the city input
  const [members, setMembers] = useState("");  // State for the members input
  const [date, setDate] = useState("");        // State for the date input

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    const newEvent = { city, members, date };  // Create a new event object
    setEvents([...events, newEvent]);           // Update the events state
    setCity("");                                 // Clear the city input
    setMembers("");                              // Clear the members input
    setDate("");                                 // Clear the date input
  };

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
          onChange={(e) => setCity(e.target.value)}  // Update city state
        />
        <input
          required
          type="number"
          placeholder="Members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}  // Update members state
        />
        <input
          placeholder="Date"
          required
          type="text"
          onFocus={(e) => (e.target.type = "date")}   
          onBlur={(e) => (e.target.type = "text")}    
          value={date}
          onChange={(e) => setDate(e.target.value)}  // Update date state
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default Tournament;
