import React from "react";
import "./startMyPage.css";

const startMyPage = () => {
  return (
    <div>
      <h1>A supporter is worth a thousand followers.</h1>
      <h3>
        Accept donations. Start a membership. Sell anything you like. It’s
        easier than you think.{" "}
      </h3>
      <div className="">
        <span className="">buymeacoffee.com/</span>
        <input placeholder="yourname" />
        <button className="">
          <span className="inline-flex relative">
            {" "}
            <h3>
              Start my page<span></span>
            </h3>
          </span>
        </button>
      </div>
    </div>
  );
};
export default startMyPage;
