import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./startMyPage.css";

const StartMyPage = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const url = `/signup?username=${username}`;
    navigate(url);
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
        <input
          className=""
          placeholder="yourname"
          onChange={(e) => setUserName(e.target.value)}
        />
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
export default StartMyPage;
