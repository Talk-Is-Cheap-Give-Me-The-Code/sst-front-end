import React from "react";

// Header component that displays the title and navigation links
const Header = () => {
  return (
    <div className="header w-full h-32 blue font-italiana  flex items-center text-left px-24">
      <h1 className="header__name text-5xl">Swiss CHESS</h1>
      <div className="header__nav flex gap-5 ml-auto">
        <span className="header__nav-item text-3xl">FAQ</span>
        <span className="header__nav-item text-3xl">Home</span>
      </div>
    </div>
  );
};

export default Header;
