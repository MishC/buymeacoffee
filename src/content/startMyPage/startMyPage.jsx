import React from "react";
import { useNavigate } from "react-router-dom";

import "./startMyPage.css";

const startMyPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="startMyPage">
      <h1>A supporter is worth a thousand followers.</h1>
      <h3>
        Accept donations. Start a membership. Sell anything you like. It’s
        easier than you think.{" "}
      </h3>
      <div className="makePage border ">
        <span className="">buymeacoffee.com/</span>
        <input className="" placeholder="yourname" />
        <button className="btn" onClick={handleClick}>
          <span className=" inline-flex relative">
            {" "}
            <h3>Start my page</h3>
          </span>
        </button>
      </div>
      <h6>It’s free, and takes less than a minute.</h6>
    </div>
  );
};
export default startMyPage;
