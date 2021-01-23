import React from "react";
import SearchBar from "../seachBar/SearchBar";

const NavBar = ({ users }) => {
  return (
    <nav className="navigation">
      <div className="navigation__content widthContent">
        <div className="navigation__logo ">Twtxt</div>
        <SearchBar users={users} />
      </div>
    </nav>
  );
};

export default NavBar;
