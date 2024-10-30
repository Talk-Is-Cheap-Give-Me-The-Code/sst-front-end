import React from "react";

// Ivent component that represents an individual tournament event
const Ivent = ({ city, members, date }) => {
  // Display all data
  return (
    <div className="ivent relative w-[850px] h-[150px] heavenblue rounded-2xl font-frank-ruhl flex flex-col">
      <div className="ivent__header w-full h-[60px] flex justify-center items-center purple rounded-t-[20px] mb-[20px] relative">
        <label className="ivent__city flex-1 justify-center">{city}</label> 
        <label className="ivent__date justify-end">{date}</label> 
      </div>
      <label className="ivent__members text-left pl-20">{members} members</label> 
    </div>
  );
};

export default Ivent;
