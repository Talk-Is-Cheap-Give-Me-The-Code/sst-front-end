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
    <div className="w-160 h-150 rounded-2xl heavenblue font-frank-ruhl text-5xl text-black flex flex-col box-border">
      <div className="w-full h-[80px] flex justify-center items-center purple rounded-t-[20px]  mb-[40px]">
        <h1 className="justify-center text-[32px]">Create tournament</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full items-center justify-center;">
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
          onFocus={(e) => (e.target.type = "date")}   // Change input type to date on focus
          onBlur={(e) => (e.target.type = "text")}    // Change back to text on blur
          value={date}
          onChange={(e) => setDate(e.target.value)}  // Update date state
        />
        <button className="w-[220px] mt-[105px] py-5 text-4xl purple rounded-2xl">Done</button>
      </form>
    </div>
  );
};

export default Tournament;
