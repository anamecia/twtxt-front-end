import React from "react";
import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__content widthContent">
        <div className="navigation__logo ">Twtxt</div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
