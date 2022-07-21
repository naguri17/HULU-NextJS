import { list } from "postcss";
import React from "react";
import listAPI from "../utils/requests";

const Nav = () => {
  return (
    <nav>
      <div>
        {Object.entries(listAPI).map(([key, { title, url }]) => {
          <h2>{title}</h2>;
        })}
      </div>
    </nav>
  );
};

export default Nav;
