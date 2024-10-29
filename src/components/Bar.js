import React from "react";

// Header component that displays the title and navigation links
const Header = () => {
  return (
    <div className="mt-0 w-full h-32 blue font-italiana text-black flex items-center text-left pl-24">
      <h1 className="text-5xl">Swiss CHESS</h1>
      <div className="relative flex items-center text-black text-xl gap-5 pl-[1350px]">
        <span className="text-3xl">FAQ</span>
        <span className="text-3xl">Home</span>
      </div>
    </div>
  );
};

export default Header;
