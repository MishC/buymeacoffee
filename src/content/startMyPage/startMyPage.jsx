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
      <div
        class="mt-32 w-600
       h-74 pl-24 pr-12 relative mx-auto border-2 border-grey rounded-40 bg-white shadow-xs
        flex items-center xs:w-full xxs:h-56"
      >
        <span class="text-24 font-cr-medium text-dark xxs:text-18">
          buymeacoffee.com/
        </span>
        <input
          placeholder="yourname"
          class="text-24 font-cr-regular text-dark w-11/12 xxs:text-18 xxs:w-full"
        />
        <button
          class="bmc-btn rounded-40 text-16 font-cr-bold all-transition flex-both-center 
             relative px-24 btn-with-bg-yellow h-56 text-20 flex-shrink-0  xxs:text-14 xxs:px-16 
             xxs:h-40 xs:hidden"
        >
          <span class="inline-flex relative">
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
