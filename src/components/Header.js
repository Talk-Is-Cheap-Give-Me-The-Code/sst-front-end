import React from "react";

// Header component that displays the title and navigation links
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

export default Header;
