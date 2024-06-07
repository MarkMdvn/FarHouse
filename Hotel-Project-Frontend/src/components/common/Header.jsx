import React from "react";

const Header = ({ title }) => {
  return (
    <header className="header ">
      <div className="overlay">
        <div className="container">
          <h1 className="header-title text-center py-4 big-text-shadow">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
