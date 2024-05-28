import React from "react";

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="header-title text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
