import React from "react";
import requests from "../utils/requests";

const Nav = () => {
  return (
    <nav>
      <div>{Object.entries(requests)}</div>
    </nav>
  );
};

export default Nav;
