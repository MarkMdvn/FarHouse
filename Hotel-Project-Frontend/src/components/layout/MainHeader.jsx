import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content">
        <h1>
          Welcome to <span className="hotel-color"> FarHouse Hotels</span>
        </h1>
        <h4>Experience the Best Hospitality in the world</h4>
      </div>
    </header>
  );
};

export default MainHeader;
