import React from "react";
import "./sticky.css";
import Dropdown from "./Dropdown";
import { name, linksSticky } from "./links_sticky.js";

const Sticky = () => {
  return (
    <div id="question">
      <Dropdown name={name()} links={linksSticky()} />
    </div>
  );
};

export default Sticky;
