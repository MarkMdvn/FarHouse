import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content text-center">
        <h1>
          Welcome to <span className="hotel-color"> FarHouse </span>
        </h1>
        <h4>Where your comfort is our priority</h4>
      </div>
    </header>
  );
};

export default MainHeader;
