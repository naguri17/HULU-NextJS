import { list } from "postcss";
import React from "react";
import listAPI from "../utils/requests";

const Nav = () => {
  return (
    <nav>
      <div>
        {Object.entries(listAPI).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red"
          >
            {" "}
            {title}{" "}
          </h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
