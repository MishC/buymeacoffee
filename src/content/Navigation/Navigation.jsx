import React from "react";
import { useNavigate } from "react-router-dom";

import "./navigation.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import CoffeeIcon from "../../assets/SVGs/CoffeeIcon";
const Navigation = ({ method, str }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="Navigation">
      <nav>
        <div>
          {" "}
          <a href="/">
            <CoffeeIcon />
          </a>
        </div>
        <div>
          <span className="roman"> {str} &nbsp;</span>
          {/* //  1 + 1 === 2 ? (2 > 0 ? 'yes' : 'no') : 'idk'; */}
          {!user ? (
            method === "Login" ? (
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                {method}
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                {method}
              </button>
            )
          ) : (
            <button onClick={() => auth.signOut()}>Logout</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
