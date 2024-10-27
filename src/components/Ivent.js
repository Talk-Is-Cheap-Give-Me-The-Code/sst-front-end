import React from "react";

// Ivent component that represents an individual tournament event
const Ivent = ({ city, members, date }) => {
  // Display all data
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

export default Ivent;
