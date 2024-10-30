import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header"; // Import the Header component
import Tournament from "./components/Tournament"; // Import the Tournament component
import EventList from "./components/EventList"; // Import the EventList component

function App() {
  const [events, setEvents] = useState([]); // State to manage the list of events
  return (
    <div className="App"> 
      <Header /> 
      <div className="app__content flex justify-between gap-5 mt-5 mx-12"> 
        <Tournament setEvents={setEvents} events={events} /> 
        <EventList events={events} /> 
      </div>
    </div>
  );
}

export default App;
